import { SmsProvider } from "../../interfaces";

type SmsBaoSendMessageOptions = {
	u?: string;
	p?: string;
	g?: string;
	m: string;
	c: string;
};
type SmsBaoSendResult = any;
type SmsBaoGetBalanceOptions = {
	u?: string;
	p?: string;
};
type SmsBaoBalance = any;

export class SmsBaoProvider
	implements SmsProvider<SmsBaoSendMessageOptions, SmsBaoGetBalanceOptions>
{
	constructor(
		private readonly clientId: string,
		private readonly clientSecret: string,
	) {}

	async sendMessage({
		u,
		p,
		g,
		m,
		c,
	}: SmsBaoSendMessageOptions): Promise<SmsBaoSendResult> {
		const parmas = new URLSearchParams();
		parmas.append("u", u ?? this.clientId);
		parmas.append("p", p ?? this.clientSecret);
		if (g) {
			parmas.append("g", g);
		}
		parmas.append("m", m);
		parmas.append("c", c);
		const res = await fetch(`https://www.smsbao.com/sms?${parmas.toString()}`);
		return await res.json();
	}

	async getBalance({
		u,
		p,
	}: SmsBaoGetBalanceOptions = {}): Promise<SmsBaoBalance> {
		const parmas = new URLSearchParams();
		parmas.append("u", u ?? this.clientId);
		parmas.append("p", p ?? this.clientSecret);
		const res = await fetch(
			`https://www.smsbao.com/query?${parmas.toString()}`,
		);
		return await res.json();
	}
}
