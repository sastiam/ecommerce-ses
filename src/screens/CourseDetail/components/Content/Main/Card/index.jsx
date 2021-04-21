import React from "react";
import styled from "styled-components";

const CardContent = styled.div`
	width: 100%;
	height: ${props => props.verticalSize};
	background-color: #fff;
	padding: 2em;

	${props => {
		if(props.center){
			return `
				display: flex;
				justify-content : center;
				align-items : center;
			`;
		}else{	
			return "";
		}
	}}

	@media screen and (max-width: 920px){
		width : 350px;
	}
`;

const ContainerTitle = styled.div`
	margin-bottom: 2em;
`;

const Title = styled.span`
	font-size: 1.2em;
	color: var(--color-light);
	font-weight: 700;
`;

const Card = ({ children , title , verticalSize = "auto" , center }) => (
	<CardContent center={center ? true : false} verticalSize={verticalSize} >
		{ title ? <ContainerTitle>
				<Title>{title}</Title>
			</ContainerTitle> : null }
		<div>
			{children}	
		</div>
	</CardContent>
)

export default Card;