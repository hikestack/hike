import isPlainObject from "lodash/isPlainObject";
import { useRef } from "react";
import { useCreation } from "./use-creation";
import { useUpdate } from "./use-update";

const proxyMap = new WeakMap();
const rawMap = new WeakMap();

function observer<T extends Record<string, any>>(
	initialVal: T,
	cb: () => void,
): T {
	const existingProxy = proxyMap.get(initialVal);

	if (existingProxy) {
		return existingProxy;
	}

	if (rawMap.has(initialVal)) {
		return initialVal;
	}

	const proxy = new Proxy<T>(initialVal, {
		get(target, key, receiver) {
			const res = Reflect.get(target, key, receiver);

			const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
			if (!descriptor?.configurable && !descriptor?.writable) {
				return res;
			}

			return isPlainObject(res) || Array.isArray(res) ? observer(res, cb) : res;
		},
		set(target, key, val) {
			const ret = Reflect.set(target, key, val);
			cb();
			return ret;
		},
		deleteProperty(target, key) {
			const ret = Reflect.deleteProperty(target, key);
			cb();
			return ret;
		},
	});

	proxyMap.set(initialVal, proxy);
	rawMap.set(proxy, initialVal);

	return proxy;
}

export function useHike<S extends Record<string, any>>(initialState: S): S {
	const update = useUpdate();
	const stateRef = useRef<S>(initialState);

	const state = useCreation(() => {
		return observer(stateRef.current, () => {
			update();
		});
	}, []);

	return state;
}
