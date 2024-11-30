import { inspect } from "util";
import * as winston from "winston";
import { ILogger } from "../../interfaces";

export class WinstonAdapter implements ILogger {
	protected readonly logger: winston.Logger;

	constructor(private readonly options: winston.LoggerOptions) {
		this.logger = winston.createLogger(this.options);
	}

	log(message: any, ...optionalParams: any[]) {
		this.logger.info(this.format(message), ...optionalParams);
	}

	error(message: any, ...optionalParams: any[]) {
		this.logger.error(this.format(message), ...optionalParams);
	}

	warn(message: any, ...optionalParams: any[]) {
		this.logger.warn(this.format(message), ...optionalParams);
	}

	private format(...messages: unknown[]) {
		return messages
			.map((m) => (typeof m === "string" ? m : inspect(m)))
			.join(" ");
	}
}
