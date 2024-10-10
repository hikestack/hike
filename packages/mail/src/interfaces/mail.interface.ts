export interface MailOptions {
	to: string;
	subject: string;
	html: string;
}

export interface IMail {
	send(options: MailOptions): Promise<boolean>;
}
