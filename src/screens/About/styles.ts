import styled, { keyframes } from "styled-components";
import { media } from "styles/responsive";

export const ContainerImageBackground = styled.div`
	width : 100%;
	height : 90vh;
	background-image: url('https://cdn.pixabay.com/photo/2016/09/01/15/18/industrial-1636390_960_720.jpg');
	background-repeat : no-repeat;
	background-size: cover;
	background-attachment: fixed;
	background-color: rgba(0,0,0,.6);
	background-blend-mode: darken;
	display: flex;
	justify-content : center;
	align-items: center;
	position: relative;

	@media (max-width:${media.mediaMobileBig}) {
		height: 75vh;
	}
`;


export const CentralContainer = styled.div`
	width: 80%;
	@media (max-width:${media.mediaMobileBig}) {
		width: 85%;
	}
`;

export const Title = styled.span`
	color: #fff;
	font-weight: bolder;
	font-size: 3.5em;
	margin-bottom: .5em;
	@media (max-width:${media.mediaMobileBig}) {
		font-size:2.3em;
		margin-bottom: .8em;
	}
`;

export const Description = styled.p`
	width: 850px;
	max-width:90%;
	font-size: 1.2em;
	line-height: 1.4em;
	font-weight: 300;
	color: #fff;
	@media (max-width:${media.mediaMobileBig}) {
		font-size:1em;
	}
`;

export const ContainerMessage = styled.div`
	width: 60%;
	margin: 0 auto;
	background-color: #fff;
	padding: 1.5em 2em;
	box-shadow: 0 8px 15px rgb(220,220,220);
	border-radius: 0 25px 0 25px;
	text-align: center;
	transform : translateY(-50%);

	@media (max-width:${media.mediaDesktopSmall}) {
		width:80%;
	}

	@media (max-width:${media.mediaMobileBig}) {
		width:90%;
	}
`;

export const Message = styled.p`
	font-weight: 300;
	line-height: 1.5em;
`;

const AnimationFloating = keyframes`
	from {
		bottom: 100px;
	}

	to {
		bottom: 90px;
	}
`;

export const FloatingIcon = styled.a`
	width: max-content;
	height: max-content;
	margin: auto;
	position: absolute;
	cursor: pointer;
	bottom: 100px;
	left: 0;
	right: 0;
	animation: ${AnimationFloating} 1s infinite alternate-reverse;

	@media (max-width:${media.mediaMobileBig}) {
		display: none;
		animation-name: none;
	}
`;

export const ContainerComponents = styled.div`
	width: 75%;
	margin: 0 auto;

	@media (max-width:${media.mediaMobileBig}) {
		width: 85%;
	}
`;