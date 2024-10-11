import * as path from "path";
import { defineConfig } from "rspress/config";
import pluginGhPages from "rspress-plugin-gh-pages";
import pluginGa from "rspress-plugin-google-analytics";
import { pluginTypedoc } from "./plugins/plugin-typedoc";
import { pluginPlayground } from "@rspress/plugin-playground";

const ROOT_DIR = path.join(__dirname);
const PACKAGES_DIR = path.resolve(__dirname, "../../packages");

export default defineConfig({
	root: path.join(ROOT_DIR, "docs"),
	title: "HikeStack",
	description: "高性能、可扩展TypeScript工具集",
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
		pluginPlayground({
			render: path.join(ROOT_DIR, "src", "Playground.tsx"),
		}),
		pluginTypedoc({
			projects: [
				"logger",
				"mail",
				"redis",
				"lock",
				"saga",
				"kysely",
				"prisma",
				"hooks",
			].map((packageName) => ({
				entryPoint: path.join(PACKAGES_DIR, packageName, "src", "index.ts"),
				output: path.join(ROOT_DIR, "docs", "reference", packageName),
				publicPath: `/official/reference/${packageName}`,
				tsconfig: path.join(PACKAGES_DIR, packageName, "tsconfig.json"),
			})),
		}),
	],
});
