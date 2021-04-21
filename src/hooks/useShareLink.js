import { useState , useEffect } from "react";

const useShareLink = () => {
	const [ shared , setShared ] = useState(false);
	const onShare = () => {
		navigator.clipboard.writeText(window.location.href).then(() => setShared(true));
	}

	useEffect(() => {
		const onSharedHide = setTimeout(() => setShared(false),1500);
		return () => clearInterval(onSharedHide);
	},[shared]);
	
	return {
		shared,
		onShare
	}
}

export default useShareLink;