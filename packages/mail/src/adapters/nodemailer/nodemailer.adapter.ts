import { IMail, MailOptions } from "@/interfaces";
import { Transporter, createTransport } from "nodemailer";

export class NodemailerAdapter implements IMail {
	private readonly transporter: Transporter;
	constructor(options: Transporter) {
		this.transporter = createTransport(options.transport, options.defaults);
	}

	async send(options: MailOptions): Promise<boolean> {
		return await this.transporter.sendMail(options);
	}
}
