import { DynamicModule, Module } from "@nestjs/common";
import {
	ASYNC_OPTIONS_TYPE,
	ConfigurableModuleClass,
	OPTIONS_TYPE,
} from "./mail.module-definition";
import { MailService } from "./mail.service";

@Module({
	providers: [MailService],
	exports: [MailService],
})
export class MailModule extends ConfigurableModuleClass {
	static register(options: typeof OPTIONS_TYPE): DynamicModule {
		return {
			...super.register(options),
		};
	}

	static registerAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
		return {
			...super.registerAsync(options),
		};
	}
}
