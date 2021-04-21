import React from "react";
import TitleBold from "components/common/TitleBold";

const MessageTotalStatistics = () => {
	const fontSize = "2.2rem";
	return (
		<TitleBold fontSize={fontSize}>
			Formando los líderes en{" "}
			<TitleBold
				fontSize={fontSize}
				style={{color:getComputedStyle(document.documentElement).getPropertyValue("--color-base")}}
			>
				la red de construcción
			</TitleBold>
		</TitleBold>
	);
};

export default MessageTotalStatistics;