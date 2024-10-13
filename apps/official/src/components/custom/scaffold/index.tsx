import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Toaster } from "@/components/ui/sonner";
import { packages } from "@/constants";
import { useHike } from "@hikestack/hooks";
import { useEffect } from "react";
import { Tab, Tabs } from "rspress/theme";
import { toast } from "sonner";

export default function Scaffold() {
	const state = useHike({
		type: "npm",
		code: "",
		packages: [],
	});

	useEffect(() => {
		if ("npm" === state.type) {
			state.code = `npm install ${state.packages.join(" ")}`;
		} else if ("yarn" === state.type) {
			state.code = `yarn add ${state.packages.join(" ")}`;
		} else if ("pnpm" === state.type) {
			state.code = `pnpm install ${state.packages.join(" ")}`;
		}
	}, [state.type, state.packages]);

	const renderPackages = () => {
		return (
			<div className="flex flex-col space-y-4 py-4 p-2">
				{Object.entries(packages)?.map(([k, p]) => (
					<div
						key={`${state.type}-${k}`}
						className="flex items-center space-x-2"
					>
						<Checkbox
							id={k}
							checked={state.packages.includes(p.package)}
							onCheckedChange={() => {
								if (!state.packages.includes(p.package)) {
									state.packages = [...state.packages, p.package];
								} else {
									state.packages = state.packages.filter(
										(pkg) => pkg !== p.package,
									);
								}
							}}
						/>
						<label htmlFor={k} className="text-sm">
							{p.package} -- {p.name}
						</label>
					</div>
				))}
			</div>
		);
	};

	return (
		<div>
			<Toaster richColors />
			<Tabs
				onChange={(tab) => {
					if (tab === 0) {
						state.type = "npm";
					} else if (tab === 1) {
						state.type = "yarn";
					} else if (tab === 2) {
						state.type = "pnpm";
					}
				}}
			>
				<Tab
					label={
						<div className="flex items-center space-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 256 256"
							>
								<path fill="#C12127" d="M0 256V0h256v256z"></path>
								<path fill="#FFF" d="M48 48h160v160h-32V80h-48v128H48z"></path>
							</svg>
							<span>npm</span>
						</div>
					}
				>
					{renderPackages()}
				</Tab>
				<Tab
					label={
						<div className="flex items-center space-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 128 128"
							>
								<g fill="#2c8ebb">
									<path d="M99.24 80.71C94.9 80.76 91.1 83 87.89 85c-6 3.71-9 3.47-9 3.47l-.1-.17c-.41-.67 1.92-6.68-.69-13.84c-2.82-7.83-7.3-9.72-6.94-10.32c1.53-2.59 5.36-6.7 6.89-14.36c.91-4.64.67-12.28-1.39-16.28c-.38-.74-3.78 1.24-3.78 1.24s-3.18-7.09-4.07-7.66c-2.87-1.84-6 7.61-6 7.61a14 14 0 0 0-11.71 4.5a9.64 9.64 0 0 1-3.85 2.27c-.41.14-.91.12-2.15 3.47c-1.9 5.07 3.24 10.81 3.24 10.81s-6.13 4.33-8.4 9.72a24.78 24.78 0 0 0-1.75 11.68s-4.36 3.78-4.64 7.68a12.87 12.87 0 0 0 1.77 7.83a1.94 1.94 0 0 0 2.63.91s-2.9 3.38-.19 4.81c2.47 1.29 6.63 2 8.83-.19c1.6-1.6 1.92-5.17 2.51-6.63c.14-.34.62.57 1.08 1a10 10 0 0 0 1.36 1s-3.9 1.68-2.3 5.51c.53 1.27 2.42 2.08 5.51 2.06c1.15 0 13.76-.72 17.12-1.53a4.33 4.33 0 0 0 2.61-1.46a63 63 0 0 0 15.49-7c4.74-3.09 6.68-3.93 10.51-4.84c3.16-.75 2.95-5.65-1.24-5.58z"></path>
									<path d="M64 2a62 62 0 1 0 62 62A62 62 0 0 0 64 2zm37.3 87.83c-3.35.81-4.91 1.44-9.41 4.36a67 67 0 0 1-15.56 7.18a8.71 8.71 0 0 1-3.64 1.77c-3.81.93-16.88 1.63-17.91 1.63h-.24c-4 0-6.27-1.24-7.49-2.54c-3.4 1.7-7.8 1-11-.69a5.55 5.55 0 0 1-3-3.9a6 6 0 0 1 0-2.06a6.66 6.66 0 0 1-.79-1A16.38 16.38 0 0 1 30 84.52c.29-3.73 2.87-7.06 4.55-8.83A28.56 28.56 0 0 1 36.61 64a26.82 26.82 0 0 1 6.82-9c-1.65-2.78-3.33-7.06-1.7-11.42c1.17-3.11 2.13-4.84 4.24-5.58a6.84 6.84 0 0 0 2.51-1.34A17.65 17.65 0 0 1 60.34 31c.19-.48.41-1 .65-1.46c1.6-3.4 3.3-5.31 5.29-6a4.88 4.88 0 0 1 4.4.5c.65.43 1.48 1 3.9 6a4.69 4.69 0 0 1 2.85-.1a3.81 3.81 0 0 1 2.39 1.94c2.47 4.74 2.8 13.19 1.72 18.62a33.8 33.8 0 0 1-5.84 13.31a25.73 25.73 0 0 1 5.77 9.43a25.42 25.42 0 0 1 1.41 10.41A28.7 28.7 0 0 0 86 81.91c3.06-1.89 7.68-4.74 13.19-4.81a6.62 6.62 0 0 1 7 5.7a6.35 6.35 0 0 1-4.89 7.03z"></path>
								</g>
							</svg>
							<span>yarn</span>
						</div>
					}
				>
					{renderPackages()}
				</Tab>
				<Tab
					label={
						<div className="flex items-center space-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1em"
								height="1em"
								viewBox="0 0 128 128"
							>
								<path
									fill="#f8ab00"
									d="M0 .004V40h39.996V.004Zm43.996 0V40h40V.004Zm44.008 0V40H128V.004Zm0 43.996v39.996H128V44Z"
								></path>
								<path
									fill="#4c4c4c"
									d="M43.996 44v39.996h40V44ZM0 87.996v40h39.996v-40Zm43.996 0v40h40v-40Zm44.008 0v40H128v-40Z"
								></path>
							</svg>
							<span>pnpm</span>
						</div>
					}
				>
					{renderPackages()}
				</Tab>
			</Tabs>
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-2 cursor-pointer">
					<Checkbox
						id="all"
						checked={state.packages.length >= Object.keys(packages).length}
						onCheckedChange={() => {
							if (state.packages.length >= Object.keys(packages).length) {
								state.packages = [];
							} else {
								state.packages = [
									...Object.values(packages).map((p) => p.package),
								];
							}
						}}
					/>
					<label htmlFor="all" className="text-sm">
						{state.packages.length >= Object.keys(packages).length
							? "取消"
							: "全选"}
					</label>
				</div>
				<div className="text-sm space-x-2">
					<span>已选择{state.packages.length}项</span>
					<Button
						className="mt-2"
						size="sm"
						disabled={state.packages.length <= 0}
						onClick={async () => {
							await navigator.clipboard.writeText(state.code);
							toast.success("复制成功");
						}}
					>
						复制
					</Button>
				</div>
			</div>
		</div>
	);
}
