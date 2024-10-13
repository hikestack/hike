import {
	IGetBalanceOptions,
	ISendMessageOptions,
	SmsProvider,
} from "./sms-provider.interface";

export interface SmsModuleOptions {
	providers: Record<
		string,
		SmsProvider<ISendMessageOptions, IGetBalanceOptions>
	>;
}
