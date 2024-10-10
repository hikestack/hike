import { EventEmitter } from "events";
import { SagaExecuteOptions } from "./interfaces";
import { ITask } from "./interfaces/task.interface";

interface Node {
	children?: Node[];
}

export abstract class Saga<T = any> extends EventEmitter {
	constructor(protected readonly tasks: ITask[]) {
		super();
	}

	async execute(data?: T, opts?: SagaExecuteOptions) {
		return;
	}

	protected traverseTree<N extends Node>(node: N, callback: (node: N) => void) {
		if (!node) return;

		callback(node);

		if (node.children && node.children.length > 0) {
			node.children.forEach((child: Node) => {
				this.traverseTree(child as N, callback);
			});
		}
	}
}
