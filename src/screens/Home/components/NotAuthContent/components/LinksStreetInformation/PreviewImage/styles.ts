import styled from "styled-components";

export const StreetCard = styled.div`
	width: 300px;
	height: 260px;
	position: relative;
`;

export const StreetImage = styled.img`
	width: inherit;
	height: inherit;
	object-fit: cover;
	border-radius: 25px;
`;

export const CardContent = styled.div`
	width: 100%;
	height: 100%;
	background-color: #F4970F;
	display: flex;
	flex-direction: column;
	color: white;
	z-index: -1;
	border-radius: 25px;
	padding: 2em;
	position: absolute;
	top: -20%;
	left: -85%;

	&.only-card {
		position: static;
	}
`;

export const NormalText = styled.p`
	width: 80%;
	line-height: 26px;
	font-size: 18px;
	font-weight: bold;
`;

export const LinkText = styled.span`
	color: white;
	font-weight: 800;
	text-transform: uppercase;
	font-size: .9em;
	margin-top: auto;
	display: flex;
	align-items: center;
`;

export const LinkTextContent = styled.span`
	margin-right: 10px;
`;