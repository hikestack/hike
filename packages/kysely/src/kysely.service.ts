import { Inject, Injectable } from "@nestjs/common";
import { Kysely } from "kysely";
import { KyselyModuleOptions } from "./kysely-module-options.interface";
import { MODULE_OPTIONS_TOKEN } from "./kysely.module-definition";

@Injectable()
export class KyselyService<T> extends Kysely<T> {
	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		private readonly options: KyselyModuleOptions,
	) {
		super(options);
	}
}
