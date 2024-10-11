import React from "react";
import { useHike } from "@hikestack/hooks";

export default function App() {
	const state = useHike({
		count: 0,
	});
	return (
		<div>
			<button onClick={() => state.count++}>点击增加计数: {state.count}</button>
		</div>
	);
}
