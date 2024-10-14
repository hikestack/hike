export * from "./packages";

const isDev = process.env.NODE_ENV !== "production";

export default {
	isDev,
	localStorageKeyPrefix: "hike-docs",
};
