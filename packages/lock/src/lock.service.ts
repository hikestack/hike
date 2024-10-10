import { Inject, Injectable } from "@nestjs/common";
import { ILock, LockModuleOptions } from "./interfaces";
import { MODULE_OPTIONS_TOKEN } from "./lock.module-definition";

@Injectable()
export class LockService implements ILock {
	protected readonly adapter: ILock;
	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		private readonly options: LockModuleOptions,
	) {
		if (!this.options.adapter) {
			throw new Error("LockModuleOptions.adapter is not defined");
		}
		this.adapter = this.options.adapter;
	}

	async using<T, O = any, S = AbortSignal & { error?: Error }>(
		resources: string[],
		duration: number,
		settingsOrRoutine: Partial<O> | ((signal: S) => Promise<T>),
		routine?: (signal: S) => Promise<T>,
	): Promise<T> {
		return await this.adapter.using(
			resources,
			duration,
			settingsOrRoutine,
			routine,
		);
	}
}
