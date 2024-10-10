import {
	FlowChildJob,
	FlowJob,
	FlowProducer,
	Queue,
	QueueBaseOptions,
	Worker,
	WorkerOptions,
} from "bullmq";
import { ITask } from "../../interfaces";
import { Saga } from "../../saga";

const uid = () => {
	return Date.now() + Math.random().toString(36).substring(2, 15);
};

export class BullSaga<T = any> extends Saga<T> {
	private readonly queueName: string = `saga-${uid()}`;
	private flow: FlowProducer;
	private queue: Queue;
	private worker: Worker;
	private registry: Record<string, ITask & FlowJob> = {};

	private committedTasks: ITask[] = [];

	constructor(
		protected readonly tasks: ITask[],
		private readonly queueOpts: QueueBaseOptions,
		private readonly workerOpts?: Partial<WorkerOptions>,
	) {
		super(tasks);
	}

	async execute(data: T, opts = { timeout: 30000 }) {
		const timeoutPromise = new Promise((_, reject) => {
			setTimeout(() => reject(new Error("Execution timeout")), opts.timeout);
		});
		try {
			this.flow = new FlowProducer(this.queueOpts);
			this.queue = new Queue(this.queueName, this.queueOpts);
			this.worker = new Worker(
				this.queueName,
				async (job) => await this.registry[job.name]?.commit?.(job.data),
				{
					concurrency: 1,
					removeOnComplete: { age: 10 },
					removeOnFail: { age: 60 },
					connection: this.queueOpts.connection,
					...this.workerOpts,
					autorun: false,
				},
			);
			await Promise.race([
				new Promise(async (resolve, reject) => {
					const jobOpts = {
						failParentOnFailure: true,
					};

					this.traverseTree(
						{ name: this.queueName, children: this.tasks } as FlowJob,
						(task) => {
							task.queueName = this.queueName;
							task.data = data;
							task.opts = jobOpts;
							this.registry[task.name] = task;
						},
					);

					await this.flow.add(
						{
							name: this.queueName,
							queueName: this.queueName,
							data,
							children: this.tasks as FlowChildJob[],
						},
						{
							queuesOptions: {
								[this.queueName]: {
									defaultJobOptions: {
										removeOnComplete: true,
										removeOnFail: true,
									},
								},
							},
						},
					);

					this.worker
						.on("active", async (job) => {
							this.emit("active", job);
						})
						.on("completed", async (job) => {
							this.emit("completed", job);
							this.committedTasks.unshift({
								...this.registry[job.name],
							});

							if (job.name === this.queueName) {
								this.emit("finished", job);
								resolve(job.returnvalue);
							}
						})
						.on("failed", async (job, err) => {
							this.emit("failed", job, err);
							reject(err);
						})
						.on("error", async (err) => {
							this.emit("error", err);
							reject(err);
						});
					this.emit("execute");
					await this.worker.run();
				}),
				timeoutPromise,
			]);
		} catch (error) {
			if (this.committedTasks.length > 0) {
				await this.handleRollback(data);
			}
			throw error;
		} finally {
			await this.close();
		}
	}

	private async handleRollback(data: T) {
		const rollbackQueueName = `${this.queueName}-rollback`;
		const rollbackQueue = new Queue(rollbackQueueName, {
			...this.queueOpts,
		});
		await rollbackQueue.addBulk(
			this.committedTasks.map((t) => ({
				name: t.name,
				queueName: rollbackQueueName,
				data,
				opts: {
					removeOnComplete: true,
					removeOnFail: true,
				},
			})),
		);
		const rollbackWorker = new Worker(
			rollbackQueueName,
			async (job) => {
				return await this.registry[job.name]?.rollback?.(job.data);
			},
			{
				removeOnComplete: {
					age: 10,
				},
				removeOnFail: {
					age: 60,
				},
				connection: this.queueOpts.connection,
				...this.workerOpts,
				concurrency: 1,
				autorun: false,
			},
		)
			.on("active", async (job) => {
				this.emit("rollback:active", job);
			})
			.on("completed", async (job) => {
				this.emit("rollback:completed", job);
				this.committedTasks = this.committedTasks.filter(
					(t) => t.name !== job.name,
				);
				if (this.committedTasks.length <= 0) {
					await rollbackWorker.close();
					await rollbackQueue.obliterate({ force: true });
					this.emit("rollback:finished", job);
				}
			})
			.on("failed", async (job, err) => {
				this.emit("rollback:failed", job, err);
			})
			.on("error", async (err) => {
				await rollbackWorker.close();
				await rollbackQueue.obliterate({ force: true });
				this.emit("rollback:error", err);
			});
		this.emit("rollback");
		await rollbackWorker.run();
	}

	private async close() {
		try {
			await this.flow.close();
			await this.worker.close();
			await this.queue.obliterate({ force: true });
		} catch (error) {
			this.emit("error", error);
		} finally {
			this.emit("close");
		}
	}
}
