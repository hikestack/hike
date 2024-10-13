import React from "react";
import { useHike } from "@hikestack/hooks";

function App() {
	const state = useHike({
		count: 0,
		user: {
			name: "John Doe",
			age: 30,
		},
	});

	const handleChange = () => {
		// 更新嵌套状态
		state.user.name = "Roy Lin";
		// 这将触发状态更新回调，导致组件重新渲染
	};

	return (
		<div>
			<p>User Name: {state.user.name}</p>
			<p>User Age: {state.user.age}</p>
			<button onClick={handleChange}>修改名称为: Roy Lin</button>
			<br />
			<button onClick={() => state.count++}>点击增加计数: {state.count}</button>
		</div>
	);
}

export default App;
