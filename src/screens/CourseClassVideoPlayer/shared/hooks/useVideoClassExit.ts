import { navigate } from "@reach/router";
import { useEffect } from "react";
import useParameters from "hooks/useParameters";

export default function useVideoClassExit() {
	const { id } = useParameters();
	useEffect(() => {
		const handler = (e) => {
			if(e.code === "Escape") navigate(`/course/${id}`);
		}
		window.addEventListener("keyup",handler);
		return () => window.removeEventListener("keyup",handler);
	},[]);
}
