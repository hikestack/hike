import { Inject, Injectable } from "@nestjs/common";
import { IMail, MailModuleOptions, MailOptions } from "./interfaces";
import { MODULE_OPTIONS_TOKEN } from "./mail.module-definition";

@Injectable()
export class MailService implements IMail {
	private readonly adapter: IMail;
	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		private readonly options: MailModuleOptions,
	) {
		if (!this.options.adapter) {
			throw new Error("MailModuleOptions.adapter is not defined");
		}
		this.adapter = options.adapter;
	}

	async send(mailOptions: MailOptions) {
		return await this.adapter.send(mailOptions);
	}
}
