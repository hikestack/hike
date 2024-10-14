import { env } from "process";

declare interface ImportMeta {
	env?: {
		MODE: string;
	};
}
