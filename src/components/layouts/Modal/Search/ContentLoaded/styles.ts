import styled from "styled-components";
import { media } from "styles/responsive";

const ContainerModalSearch = styled.div`
	width: 80%;
	margin: 0 auto;

	@media screen and (max-width : ${media.mediaTabletMedium}){
		width: 90%;
	}
`;

const IconCloseModal = styled.span`
	position: absolute;
	right: 0;
	top: 0;
	font-size: 2em;
	padding: 1em;
	cursor: pointer;
`;

export {
	ContainerModalSearch,
	IconCloseModal
}