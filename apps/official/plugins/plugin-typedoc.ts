import type { RspressPlugin } from "@rspress/shared";
import * as TypeDoc from "typedoc";

interface PluginTypedocProps {
	projects: {
		entryPoint: string;
		output: string;
		publicPath: string;
		tsconfig: string;
	}[];
}

export function pluginTypedoc({ projects }: PluginTypedocProps): RspressPlugin {
	return {
		name: "plugin-typedoc",
		async beforeBuild(config, isProd) {
			if (isProd) {
				for (const { entryPoint, tsconfig, publicPath, output } of projects) {
					const app = await TypeDoc.Application.bootstrapWithPlugins({
						entryPoints: [entryPoint],
						tsconfig,
						plugin: ["typedoc-plugin-markdown"],
						// @ts-ignore
						entryFileName: "index",
						publicPath,
					});
					const project = await app.convert();
					if (project) {
						await app.generateDocs(project, output);
					}
				}
			}
		},
	};
}
