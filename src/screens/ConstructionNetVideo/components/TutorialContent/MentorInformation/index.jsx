import React, { memo } from "react";
import "./index.scss";

//Utilies
import TitleBold from "../../../../../components/common/TitleBold";
import GlobalDiv from "../../../../../components/common/GlobalDiv";
import styled from "styled-components";

//Styles
const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius : 50%;
`;

const MentorInformation = props => {
	const { sourceImage , name , type } = props;

	return <GlobalDiv>
		<GlobalDiv>
			<TitleBold fontSize="1.2em">Posteado Por</TitleBold>
		</GlobalDiv>
		<GlobalDiv paddingVertical="1em" className="container-mentor-posting">
			<div>
				<Image src={sourceImage} alt=""/>
			</div>
			<div className="container-information">
				<span className="mentor">{name}</span>
				<span className="type">{type}</span>
			</div>
		</GlobalDiv>
	</GlobalDiv>
}

export default memo(MentorInformation);