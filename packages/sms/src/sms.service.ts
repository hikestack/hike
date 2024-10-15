import { Inject, Injectable } from "@nestjs/common";
import {
	IBalanceResult,
	IGetBalanceOptions,
	ISendMessageOptions,
	ISendResult,
	SmsModuleOptions,
	SmsProvider,
} from "./interfaces";
import { MODULE_OPTIONS_TOKEN } from "./sms.module-definition";

@Injectable()
export class SmsService {
	constructor(
		@Inject(MODULE_OPTIONS_TOKEN)
		private readonly options: SmsModuleOptions,
	) {}

	async sendMessage<
		T extends SmsProvider<ISendMessageOptions, IGetBalanceOptions>,
	>(
		provider: keyof SmsModuleOptions["providers"],
		options: T["sendMessage"] extends (arg: infer P) => any ? P : never,
	): Promise<ISendResult> {
		if (!this.options.providers[provider]) {
			throw new Error(`Provider ${provider} is not defined`);
		}
		return (this.options.providers[provider] as T).sendMessage(options);
	}

	async getBalance<
		T extends SmsProvider<ISendMessageOptions, IGetBalanceOptions>,
	>(
		provider: keyof SmsModuleOptions["providers"],
		options?: T["getBalance"] extends (arg: infer P) => any ? P : never,
	): Promise<IBalanceResult> {
		if (!this.options.providers[provider]) {
			throw new Error(`Provider ${provider} is not defined`);
		}
		return (this.options.providers[provider] as T).getBalance(options);
	}
}
