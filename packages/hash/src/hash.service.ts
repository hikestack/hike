import { Inject, Injectable } from "@nestjs/common";
import { MODULE_OPTIONS_TOKEN } from "./hash.module-definition";
import { HashModuleOptions, IHash } from "./interfaces";

@Injectable()
export class HashService implements IHash {
	protected readonly adapter: IHash;
	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		private readonly options: HashModuleOptions,
	) {
		if (!this.options.adapter) {
			throw new Error("HashModuleOptions.adapter is not defined");
		}
		this.adapter = this.options.adapter;
	}

	async hash(value: string, salt?: string): Promise<string> {
		return await this.adapter.hash(value, salt);
	}

	async compare(value: string, hash: string): Promise<boolean> {
		return await this.adapter.compare(value, hash);
	}
}
