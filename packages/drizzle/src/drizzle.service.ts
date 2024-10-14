import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { drizzle } from "drizzle-orm/connect";
import {
	DatabaseClient,
	DatabaseConnectionOptions,
	DrizzleModuleOptions,
} from "./drizzle-module-options.interface";
import { MODULE_OPTIONS_TOKEN } from "./drizzle.module-definition";

@Injectable()
export class DrizzleService<
	TClient extends DatabaseClient = "mysql2",
	TSchema extends DatabaseConnectionOptions = any,
> implements OnModuleInit
{
	private client;

	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		private readonly options: DrizzleModuleOptions,
	) {}

	async onModuleInit() {
		if (this.options.client) {
			this.client = await drizzle(this.options.client, this.options.config);
		} else {
			this.client = await drizzle(this.options.config);
		}
	}

	get db() {
		return this.client;
	}
}
