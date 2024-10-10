import { Redis as IORedisClient, Cluster as IORedisCluster } from "ioredis";
import Redlock, { RedlockAbortSignal } from "redlock";
import { Settings } from "redlock";
import { ILock } from "../../interfaces";

declare type Client = IORedisClient | IORedisCluster;

export class RedlockAdapter implements ILock {
	protected readonly lock: Redlock;

	constructor(
		private readonly options: {
			clients: Iterable<Client>;
			settings?: Partial<Settings>;
			scripts?: {
				readonly acquireScript?: string | ((script: string) => string);
				readonly extendScript?: string | ((script: string) => string);
				readonly releaseScript?: string | ((script: string) => string);
			};
		},
	) {
		this.lock = new Redlock(
			this.options.clients,
			this.options.settings,
			this.options.scripts,
		);
	}

	async using<T, O = any, S = RedlockAbortSignal>(
		resources: string[],
		duration: number,
		settingsOrRoutine: Partial<O> | ((signal: S) => Promise<T>),
		routine?: (signal: S) => Promise<T>,
	): Promise<T> {
		if (typeof settingsOrRoutine === "function") {
			routine = settingsOrRoutine as (signal: S) => Promise<T>;
			settingsOrRoutine = {} as Partial<O>;
		} else {
			if (!routine) {
				throw new Error(
					"When settingsOrRoutine is not a function, routine must be provided.",
				);
			}
		}
		return await this.lock.using(
			resources,
			duration,
			settingsOrRoutine,
			routine as (signal: RedlockAbortSignal) => Promise<T>,
		);
	}
}
