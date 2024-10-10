import { Inject, Injectable } from "@nestjs/common";
import { ILogger, LoggerModuleOptions } from "./interfaces";
import { MODULE_OPTIONS_TOKEN } from "./logger.module-definition";

@Injectable()
export class LoggerService implements ILogger {
	protected readonly logger: ILogger;
	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		private readonly options: LoggerModuleOptions,
	) {
		if (!this.options.logger) {
			throw new Error("LoggerModuleOptions.logger is not defined");
		}
		this.logger = this.options.logger;
	}

	log(message: any, ...optionalParams: any[]) {
		this.logger.log(message, ...optionalParams);
	}

	error(message: any, ...optionalParams: any[]) {
		this.logger.error(message, ...optionalParams);
	}

	warn(message: any, ...optionalParams: any[]) {
		this.logger.warn(message, ...optionalParams);
	}
}
