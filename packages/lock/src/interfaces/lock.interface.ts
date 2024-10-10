export interface ILock {
	using<
		T,
		O = any,
		S = AbortSignal & {
			error?: Error;
		},
	>(
		resources: string[],
		duration: number,
		settingsOrRoutine: Partial<O> | ((signal: S) => Promise<T>),
		routine?: (signal: S) => Promise<T>,
	): Promise<T>;
}
