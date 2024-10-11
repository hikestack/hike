import { useCallback } from "react";
import { useLocation } from "react-router-dom";

export default function useCheckActiveNav() {
	const { pathname } = useLocation();

	const checkActiveNav = useCallback(
		(nav: string) => (nav === "/" ? nav === pathname : pathname.includes(nav)),
		[pathname],
	);

	return { checkActiveNav };
}
