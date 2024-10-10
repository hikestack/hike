import { Inject, Injectable } from "@nestjs/common";
import Redis from "ioredis";
import { RedisModuleOptions } from "./redis-module-options.interface";
import { MODULE_OPTIONS_TOKEN } from "./redis.module-definition";

@Injectable()
export class RedisService extends Redis {
	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		public readonly options: RedisModuleOptions,
	) {
		super(options);
	}

	fork(options?: RedisModuleOptions): RedisService {
		return new RedisService(options ?? this.options);
	}
}
