import { DynamicModule, Module } from "@nestjs/common";
import {
	ASYNC_OPTIONS_TYPE,
	ConfigurableModuleClass,
	OPTIONS_TYPE,
} from "./oauth.module-definition";
import { OAuthService } from "./oauth.service";

@Module({
	providers: [OAuthService],
	exports: [OAuthService],
})
export class OAuthModule extends ConfigurableModuleClass {
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
