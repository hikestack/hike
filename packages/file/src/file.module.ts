import { DynamicModule, Module } from "@nestjs/common";
import {
	ASYNC_OPTIONS_TYPE,
	ConfigurableModuleClass,
	OPTIONS_TYPE,
} from "./file.module-definition";
import { FileService } from "./file.service";

@Module({
	providers: [FileService],
	exports: [FileService],
})
export class FileModule extends ConfigurableModuleClass {
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
