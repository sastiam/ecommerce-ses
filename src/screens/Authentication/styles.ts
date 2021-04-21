import styled from "styled-components";
import { media } from "styles/responsive";

export const Container = styled.div`
	min-width: 400px;
	height : 100%;
	background-color: #fff;

	@media screen and (max-width : 1280px){
		width : 100%;
		min-width : 100%;
		height: 100%;
	}
`;

export const Content = styled.div`
	width: 340px;
	margin: 0 auto;

	@media screen and (max-width : ${media.mediaMobileBig}){
		width: 85%;
	}
`;