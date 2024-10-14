import {
	useCallback,
	useDebugValue,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useSyncExternalStore,
} from "react";
import {
	affectedToPathList,
	createProxy as createProxyToCompare,
	isChanged,
} from "proxy-compare";
import { snapshot, subscribe } from "./vanilla.ts";
import type { Snapshot } from "./vanilla.ts";
import { isDev } from "@/lib/utils.ts";

const useAffectedDebugValue = (
	state: object,
	affected: WeakMap<object, unknown>,
) => {
	const pathList = useRef<(string | number | symbol)[][]>();
	useEffect(() => {
		pathList.current = affectedToPathList(state, affected, true);
	});
	useDebugValue(pathList.current);
};
const condUseAffectedDebugValue = useAffectedDebugValue;

const targetCache = new WeakMap();

type Options = {
	sync?: boolean;
};

export function useModel<T extends object>(
	proxyObject: T,
	options?: Options,
): Snapshot<T> {
	const notifyInSync = options?.sync;
	// per-proxy & per-hook affected, it's not ideal but memo compatible
	const affected = useMemo(
		() => proxyObject && new WeakMap<object, unknown>(),
		[proxyObject],
	);
	const lastSnapshot = useRef<Snapshot<T>>();
	let inRender = true;
	const currSnapshot = useSyncExternalStore(
		useCallback(
			(callback) => {
				const unsub = subscribe(proxyObject, callback, notifyInSync);
				callback(); // Note: do we really need this?
				return unsub;
			},
			[proxyObject, notifyInSync],
		),
		() => {
			const nextSnapshot = snapshot(proxyObject);
			try {
				if (
					!inRender &&
					lastSnapshot.current &&
					!isChanged(
						lastSnapshot.current,
						nextSnapshot,
						affected,
						new WeakMap(),
					)
				) {
					// not changed
					return lastSnapshot.current;
				}
			} catch {
				// ignore if a promise or something is thrown
			}
			return nextSnapshot;
		},
		() => snapshot(proxyObject),
	);
	inRender = false;
	useLayoutEffect(() => {
		lastSnapshot.current = currSnapshot;
	});
	if (isDev) {
		condUseAffectedDebugValue(currSnapshot as object, affected);
	}
	const proxyCache = useMemo(() => new WeakMap(), []); // per-hook proxyCache
	return createProxyToCompare(currSnapshot, affected, proxyCache, targetCache);
}
