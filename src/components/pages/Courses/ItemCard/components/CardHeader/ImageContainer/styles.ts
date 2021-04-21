import styled, { css } from "styled-components";
import { Flex } from "../../../../../../../styles/mixins";
import { media } from "../../../../../../../styles/responsive";

const height = '190px';
const radius = '15px'

const CourseImage = styled.img`
	width: 100%;
	height: ${height};
	min-height: ${height};
	object-fit: cover;
	border-radius: ${radius};
	transition: .3s;
`;

const HideContainerMessageImage = styled.div`
	width: 100%;
	height: ${height};
	top: 0;
	opacity: 0;
	transition: .3s;
	position: absolute;
	visibility: hidden;
	cursor: pointer;
	background-color: rgba(0,0,0,0.6);
	border-radius: ${radius};

	${Flex()};
`;

const IconHideLayout = styled.span`
	color: #fff;
	font-size: 1.1em;
`;

const TextHideLayout = styled.div`
	padding-left: 5px;
	font-size: .9em;
	color: #fff;
`;

//Main Container
interface IProps {
	simple : boolean
}

const CourseImageContainer = styled.div<IProps>`
  position: relative;
	line-height: 0;
	border-radius: ${radius};
	overflow: hidden;
	
	&:hover ${HideContainerMessageImage} {
		opacity: 1;
		visibility: visible;
	}

	&:hover ${CourseImage} {
		transform: scale(1.3) rotate(10deg);
	}

	${({ simple }) => simple && css`
		${CourseImage} {
			height: 180px;
			min-height: 180px;
		}

		&:hover ${HideContainerMessageImage} {
			opacity: 0;
			visibility: hidden;
		}
	`}

	@media screen and (max-width : ${media.mediaDesktopMedium}) {
		${CourseImage} , .${HideContainerMessageImage} {
			height: 250px;
		}
	}

	@media screen and (max-width : ${media.mediaTabletBig}) {
		${HideContainerMessageImage} {
			display: none;
		}
	}
`;

export {
	CourseImage,
	CourseImageContainer,
	TextHideLayout,
	IconHideLayout,
	HideContainerMessageImage
}