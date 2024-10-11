import { useEffect, useRef } from "react";
import { useUnmount } from "../../use-unmount";
import type { Plugin } from "../types";
import limit from "../utils/limit";
import subscribeFocus from "../utils/subscribe-focus";

const useRefreshOnWindowFocusPlugin: Plugin<any, any[]> = (
	fetchInstance,
	{ refreshOnWindowFocus, focusTimespan = 5000 },
) => {
	const unsubscribeRef = useRef<() => void>();

	const stopSubscribe = () => {
		unsubscribeRef.current?.();
	};

	useEffect(() => {
		if (refreshOnWindowFocus) {
			const limitRefresh = limit(
				fetchInstance.refresh.bind(fetchInstance),
				focusTimespan,
			);
			unsubscribeRef.current = subscribeFocus(() => {
				limitRefresh();
			});
		}
		return () => {
			stopSubscribe();
		};
	}, [refreshOnWindowFocus, focusTimespan]);

	useUnmount(() => {
		stopSubscribe();
	});

	return {};
};

export default useRefreshOnWindowFocusPlugin;
