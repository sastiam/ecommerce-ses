import styled from "styled-components";
import { Flex } from "styles/mixins";
import { media } from "styles/responsive";

const Icon = styled.span`
	font-size: 2em;
	line-height: 0;
`;


const TitleContainer = styled.div`
	margin: 2em 0;
	${Flex('flex-start')};
`;

const Title = styled.span`
	font-size: 1.6em;
	padding: 0 .5em;
`;

const Header = styled.header`
	padding: 2em 0;

	@media screen and (max-width: ${media.mediaTabletBig}){
		${TitleContainer} {
			margin-top: 3.5em;
		} 

		${Icon} {
			font-size: 1.5em;
		}

		${Title} {
			font-size: 1.3em;
		}
	}
`;

const ContainerCards = styled.div`
	display:flex;
	flex-flow: row wrap;
	margin-top: 2em;

	@media screen and (max-width : 750px){
		width : 100%;
		overflow-x : auto;
		flex-flow: row nowrap;

		* {
			flex : none;
		}

		&::-webkit-scrollbar{
			display: none;
		}
	}
`;

export {
	TitleContainer,
	ContainerCards,
	Header,
	Icon,
	Title
}