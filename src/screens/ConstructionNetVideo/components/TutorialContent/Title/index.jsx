import React, { memo } from "react";

//Utitlity
import GlobalDiv from "../../../../../components/common/GlobalDiv";
import TitleBold from "../../../../../components/common/TitleBold";

const Title = ({ title , date }) => {
	return <GlobalDiv>
		<TitleBold styles={{ "padding" : ".3em 0" }} fontSize="2.2em">{title}</TitleBold>
		<span>{date}</span>				
	</GlobalDiv>
}

export default memo(Title);