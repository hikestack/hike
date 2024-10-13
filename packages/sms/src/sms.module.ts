import { DynamicModule, Module } from "@nestjs/common";
import {
	ASYNC_OPTIONS_TYPE,
	ConfigurableModuleClass,
	OPTIONS_TYPE,
} from "./sms.module-definition";
import { SmsService } from "./sms.service";

@Module({
	providers: [SmsService],
	exports: [SmsService],
})
export class SmsModule extends ConfigurableModuleClass {
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
