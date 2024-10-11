import { useDark } from "rspress/runtime";
import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";
import "./index.css";

export default function OpenApi() {
	const dark = useDark();
	return (
		<ApiReferenceReact
			configuration={{
				darkMode: dark,
				forceDarkModeState: dark ? "dark" : "light",
				defaultHttpClient: {
					targetKey: "javascript",
					clientKey: "axios",
				},
				spec: {
					url: "https://cdn.jsdelivr.net/npm/@scalar/galaxy/dist/latest.yaml",
				},
			}}
		/>
	);
}
