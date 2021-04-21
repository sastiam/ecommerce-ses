import styled, { css } from "styled-components";
import { media } from "styles/responsive";
import { IComponentInformation } from '../../types';

const padding = '3.5em';

export const TextContainer = styled.div`
	padding-right: ${padding};
	flex-grow: 1;
`;

export const Description = styled.p`
	width: 500px;
	text-align: left;
	font-weight: 400;
	line-height: 1.4em;
`;

export const ImageContainer = styled.div`
	width: 420px;
	height: 250px;
	max-height: 250px;
	background-color: rgb(230,230,230);
	border-radius: 15px;
	overflow: hidden;
	flex: none;
`;

export const Image = styled.img`
	width: inherit;
	height: inherit;
	filter: brightness(90%);
`;

//Main Component
export const Container = styled.div<IComponentInformation>`
	width: 100%;
	display: flex;
	align-items: center;
	margin-top: 4em;
	padding-bottom: 4em;
	border-bottom: 1px solid rgb(230,230,230);

	${({ isRight }) => isRight && css`
		${TextContainer} {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			order: 2;
			padding-right: 0;
			padding-left: ${padding};

			${Description} {
				text-align: right;
			}
		}

		${ImageContainer} {
			order: 1;
		}
	`}

	@media (max-width:${media.mediaDesktopBig}) {
		${Description} {
			width:80%;
		}
	}
	@media (max-width:${media.mediaDesktopSmall}) {
		${ImageContainer} {
			width:300px;
		}
	}
	@media (max-width:${media.mediaTabletBig}) {
		display:block;
		${Description}, ${ImageContainer} {
			width:100%;
		}
		${TextContainer} {
			padding-left:0;
			padding-right:0;
		}
		${ImageContainer} {
			margin:2em auto;
		}
	}

	@media (max-width:${media.mediaTabletSmall}) {
		${ImageContainer} {
			height: auto;
			
		}
	}
`;