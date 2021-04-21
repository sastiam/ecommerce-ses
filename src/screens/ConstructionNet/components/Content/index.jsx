import React from "react";
import "./index.scss";

//UI
import GlobalTitle from "../../../../components/common/GlobalTitle";
import GlobalDiv from "../../../../components/common/GlobalDiv";
import VideoList from "./VideoList";
import TopContent from "./TopContent";

const Content = () => {
	return <GlobalDiv className="tutorials" sizeWidth="80%" minHeight="80vh" center paddingTop="5em" paddingBottom="8em" >
		<GlobalTitle paddingVertical="0em" fontSize=".7em" text="Descubre todos nuestros videos" textAlign="left" align="flex-start" sizeWidth="400px" />
		<TopContent />		
		<VideoList />
	</GlobalDiv>	
}

export default Content;