import { useMemo, useRef } from "react";
import { isDev, isFunction } from "./lib/utils";

type noop = (this: any, ...args: any[]) => any;

type PickFunction<T extends noop> = (
	this: ThisParameterType<T>,
	...args: Parameters<T>
) => ReturnType<T>;

export function useMemoizedFn<T extends noop>(fn: T) {
	if (isDev) {
		if (!isFunction(fn)) {
			console.error(
				`useMemoizedFn expected parameter is a function, got ${typeof fn}`,
			);
		}
	}

	const fnRef = useRef<T>(fn);

	// why not write `fnRef.current = fn`?
	// https://github.com/alibaba/hooks/issues/728
	fnRef.current = useMemo<T>(() => fn, [fn]);

	const memoizedFn = useRef<PickFunction<T>>();
	if (!memoizedFn.current) {
		memoizedFn.current = function (this, ...args) {
			return fnRef.current.apply(this, args);
		};
	}

	return memoizedFn.current as T;
}
