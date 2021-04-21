import React, { memo } from "react";

//Utilies
import TitleBold from "../../../../../components/common/TitleBold";
import GlobalDiv from "../../../../../components/common/GlobalDiv";

const ContentInformation = props => {
	const { text } = props;

	return <GlobalDiv paddingBottom="3.5em">
		<GlobalDiv>
			<TitleBold fontSize="1.2em" >Informacion</TitleBold>
		</GlobalDiv>
		<GlobalDiv>
			<p>{text}</p>
		</GlobalDiv>
	</GlobalDiv>
}

export default memo(ContentInformation);