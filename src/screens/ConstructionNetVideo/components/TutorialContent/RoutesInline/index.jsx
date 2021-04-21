import React, { memo } from "react";
import { useNavigate } from "@reach/router";
import {  } from 'react-icons/ai'
import styled from "styled-components";

//Components
import GlobalDiv from "../../../../../components/common/GlobalDiv";

//Styles
const ButtonSpan = styled.button`
	background: #FFF;
	font-size: 13px;
	color: var(--color-light);
	margin-right : ${props => props.title ? "0" : "10px"};

	${props => {
		if(!props.icon){
			return `
				cursor: pointer;
				&:hover {
					color: var(--color-secondary);
				}
			`
		}else {
			return "cursor: initial;";
		}
	}}
`;

const RoutesInline = props => {
	//Props
	const { title } = props;

	//Hooks
	const navigate = useNavigate();

	//Actions
	const onClickHome = () => navigate("/",{ replace : false });
	const onClickTutorial = () => navigate("/red", { replace : false });

	return <GlobalDiv paddingBottom="1em">
		<ButtonSpan onClick={onClickHome}>Home</ButtonSpan>
		<ButtonSpan icon>{`>`}</ButtonSpan>
		<ButtonSpan onClick={onClickTutorial}>Red de Construcción</ButtonSpan>
		<ButtonSpan icon>{`>`}</ButtonSpan>
		<ButtonSpan title>{title}</ButtonSpan>
	</GlobalDiv>
}

export default memo(RoutesInline);