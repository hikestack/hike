import { Inject, Injectable } from "@nestjs/common";
import { ILogger, LoggerModuleOptions } from "./interfaces";
import { MODULE_OPTIONS_TOKEN } from "./logger.module-definition";

@Injectable()
export class LoggerService implements ILogger {
	protected readonly adapter: ILogger;
	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		private readonly options: LoggerModuleOptions,
	) {
		if (!this.options.adapter) {
			throw new Error("LoggerModuleOptions.adapter is not defined");
		}
		this.adapter = this.options.adapter;
	}

	log(message: any, ...optionalParams: any[]) {
		this.adapter.log(message, ...optionalParams);
	}

	error(message: any, ...optionalParams: any[]) {
		this.adapter.error(message, ...optionalParams);
	}

	warn(message: any, ...optionalParams: any[]) {
		this.adapter.warn(message, ...optionalParams);
	}
}
