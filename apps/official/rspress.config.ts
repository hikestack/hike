import * as path from "path";
import { pluginPreview } from "@rspress/plugin-preview";
import pluginGhPages from "rspress-plugin-gh-pages";
import pluginGa from "rspress-plugin-google-analytics";
import { defineConfig } from "rspress/config";
import { pluginTypedoc } from "./plugins/plugin-typedoc";
import { packages } from "./src/constants";

const ROOT_DIR = path.join(__dirname);
const PACKAGES_DIR = path.resolve(__dirname, "../../packages");

export default defineConfig({
	root: path.join(ROOT_DIR, "docs"),
	title: "HikeStack",
	description: "简单、可扩展TypeScript工具集",
	icon: "/rspress-icon.png",
	logo: {
		light: "/rspress-light-logo.png",
		dark: "/rspress-dark-logo.png",
	},
	themeConfig: {
		enableContentAnimation: true,
		enableAppearanceAnimation: true,
		socialLinks: [
			{
				icon: "github",
				mode: "link",
				content: "https://github.com/hikestack",
			},
			{
				icon: "discord",
				mode: "link",
				content: "https://discord.gg/7kT5ntvF",
			},
		],
		footer: {
			message: `Copyright © ${new Date().getFullYear()} HikeStack. Powered by Rspress.`,
		},
	},
	globalStyles: path.join(ROOT_DIR, "styles", "index.css"),
	plugins: [
		pluginGhPages({
			repo: "git@github.com:hikestack/official.git",
			branch: "main",
		}),
		pluginGa({
			id: "G-G1G5G0PTKD",
		}),
		pluginPreview({
			defaultRenderMode: "pure",
		}),
		// pluginPlayground({
		// 	render: path.join(ROOT_DIR, "src", "Playground.tsx"),
		// }),
		pluginTypedoc({
			projects: Object.keys(packages).map((p) => ({
				entryPoint: path.join(PACKAGES_DIR, p, "src", "index.ts"),
				output: path.join(ROOT_DIR, "docs", "reference", p),
				publicPath: `/official/reference/${p}`,
				tsconfig: path.join(PACKAGES_DIR, p, "tsconfig.json"),
			})),
		}),
	],
});
