import type { RspressPlugin } from "@rspress/shared";
import path from "path";
import * as docgen from "react-docgen-typescript";

interface PluginDocgenProps {}

export function pluginDocgen({}: PluginDocgenProps): RspressPlugin {
	const options = {
		savePropValueAsString: true,
	};
	return {
		name: "plugin-docgen",
		async beforeBuild(config, isProd) {
			const docs = docgen
				.withCustomConfig(path.join(__dirname, "..", "tsconfig.json"), options)
				.parse(path.join(__dirname, "..", "src/components/test.tsx"));
			console.log(docs[0]?.props);
		},
	};
}
