import { Inject, Injectable } from "@nestjs/common";
import { FileModuleOptions } from "./interfaces";
import { MODULE_OPTIONS_TOKEN } from "./file.module-definition";

@Injectable()
export class FileService {
	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		private readonly options: FileModuleOptions,
	) {}

	async get(
		provider: keyof FileModuleOptions["providers"],
		path: string,
	): Promise<string> {
		if (!this.options.providers[provider]) {
			throw new Error(`Provider ${provider} is not defined`);
		}
		return this.options.providers[provider].get(path);
	}

	async put(
		provider: keyof FileModuleOptions["providers"],
		name: string,
		content: string | Buffer,
	): Promise<string> {
		if (!this.options.providers[provider]) {
			throw new Error(`Provider ${provider} is not defined`);
		}
		return this.options.providers[provider].put(name, content);
	}

	async delete(provider: keyof FileModuleOptions["providers"], path: string) {
		if (!this.options.providers[provider]) {
			throw new Error(`Provider ${provider} is not defined`);
		}
		return this.options.providers[provider].delete(path);
	}
}
