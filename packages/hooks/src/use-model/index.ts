import * as vanillaUtils from "./vanilla/utils";
import * as reactUtils from "./react/utils";

export * from "./vanilla";
export * from "./react";

export const modelUtils = {
	...vanillaUtils,
	...reactUtils,
};
