import { globalHistory } from "@reach/router";
import { config } from "react-transition-group";

const notIsMainPath = (urlMaster) => {
	let reg =	new RegExp(`(${urlMaster}|${urlMaster}/)$`, "gi").test(window.location.href);
	return !reg && window.location.href.includes(urlMaster);
}

globalHistory.listen(() => {
	if(!window.location.href.includes("search"))
		document.documentElement.scrollTop = 0;
	
	if (notIsMainPath("panel") || notIsMainPath("configuration") || notIsMainPath("search")) {
		config.disabled = true;
	} else {
		config.disabled = false;
	}
});
