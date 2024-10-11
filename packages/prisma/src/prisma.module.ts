import { DynamicModule, Module } from "@nestjs/common";
import {
	ASYNC_OPTIONS_TYPE,
	ConfigurableModuleClass,
	OPTIONS_TYPE,
} from "./prisma.module-definition";
import { PrismaService } from "./prisma.service";

@Module({
	providers: [PrismaService],
	exports: [PrismaService],
})
export class PrismaModule extends ConfigurableModuleClass {
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
