export type ISendMessageOptions = {};
export type IGetBalanceOptions = {};
export type ISendResult = {};
export type IBalanceResult = {};

export interface SmsProvider<ISendMessageOptions, IGetBalanceOptions> {
	sendMessage(options?: ISendMessageOptions): Promise<ISendResult>;
	getBalance(options?: IGetBalanceOptions): Promise<IBalanceResult>;
}
