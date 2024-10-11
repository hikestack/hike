import { useEffect } from "react";
import { isDev, isFunction } from "./lib/utils";
import { useLatest } from "./use-latest";

export const useUnmount = (fn: () => void) => {
	if (isDev) {
		if (!isFunction(fn)) {
			console.error(
				`useUnmount expected parameter is a function, got ${typeof fn}`,
			);
		}
	}

	const fnRef = useLatest(fn);

	useEffect(
		() => () => {
			fnRef.current();
		},
		[],
	);
};
