import isBrowser from "../../lib/is-browser";

export default function isDocumentVisible(): boolean {
	if (isBrowser) {
		return document.visibilityState !== "hidden";
	}
	return true;
}
