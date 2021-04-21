import styled from "styled-components";
import { media } from "styles/responsive";

export const ImageTitle = styled.img`
	width: 70px;
	height: 70px;

	@media screen and (max-width : ${media.mediaDesktopBig}) {
		width: 55px;
		height: 55px;
	}

	@media screen and (max-width : ${media.mediaDesktopMedium}) {
		width: 50px;
		height: 50px;
	}
`;

export default ImageTitle;