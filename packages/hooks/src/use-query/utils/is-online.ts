import isBrowser from "../../lib/is-browser";

export default function isOnline(): boolean {
	if (isBrowser && typeof navigator.onLine !== "undefined") {
		return navigator.onLine;
	}
	return true;
}
