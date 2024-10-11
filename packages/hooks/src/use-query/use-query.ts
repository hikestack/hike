import useAutoRunPlugin from "./plugins/use-auto-run-plugin";
import useCachePlugin from "./plugins/use-cache-plugin";
import useDebouncePlugin from "./plugins/use-debounce-plugin";
import useLoadingDelayPlugin from "./plugins/use-loading-delay-plugin";
import usePollingPlugin from "./plugins/use-polling-plugin";
import useRefreshOnWindowFocusPlugin from "./plugins/use-refresh-on-window-focus-plugin";
import useRetryPlugin from "./plugins/use-retry-plugin";
import useThrottlePlugin from "./plugins/use-throttle-plugin";
import type { Options, Plugin, Service } from "./types";
import useQueryImplement from "./use-query-implement";

export function useQuery<TData, TParams extends any[]>(
	service: Service<TData, TParams>,
	options?: Options<TData, TParams>,
	plugins?: Plugin<TData, TParams>[],
) {
	return useQueryImplement<TData, TParams>(service, options, [
		...(plugins || []),
		useDebouncePlugin,
		useLoadingDelayPlugin,
		usePollingPlugin,
		useRefreshOnWindowFocusPlugin,
		useThrottlePlugin,
		useAutoRunPlugin,
		useCachePlugin,
		useRetryPlugin,
	] as Plugin<TData, TParams>[]);
}
