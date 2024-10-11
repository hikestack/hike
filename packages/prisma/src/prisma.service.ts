import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaModuleOptions } from "./prisma-module-options.interface";
import { MODULE_OPTIONS_TOKEN } from "./prisma.module-definition";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		private readonly options: PrismaModuleOptions,
	) {
		super(options);
	}

	async onModuleInit() {
		await this.$connect();
	}
}
