import styled from "styled-components";
import { Flex } from "styles/mixins";

const MentorCardContainer = styled.div`
	width: 100%;
	display: grid;
	justify-items: center;
	background-color: #fff;
	box-shadow: 0 5px 15px rgb(240,240,240);
	padding: 10px;
`;

const ContainerImage = styled.div`
	padding: 2em 0;
`;

const ContainerAvatarUser = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	line-height: 0;
	border: 1px solid #EFEFEF;
	overflow: hidden;
`;

const AvatarImage = styled.img`
	width: inherit;
	height: inherit;
	border-radius: inherit;
`;

const ContainerInformation = styled.div`
	display: grid;
	justify-items: center;
	text-align: center;
	grid-gap: 1.5em;
`;

const ContentUser = styled.div`
	display: grid;
`;

const Username = styled.span`
	font-size: 1.5em;
	font-weight: bold;
	color: #4B4B4B;
	cursor: pointer;
	
	&:hover {
		color: #0F56BF;
	}
`;

const Work = styled.span`
	color: #B5B5B5;
`;

const Description = styled.p`
	width: 260px;
	color: rgb(0,0,0,0.54);
	margin-bottom: 1.5em;
`;

const ContainerContactUs = styled.div`
	width: 100%;
	padding: 1.5em 0;
	border-top: 1px solid #F4F4F4;
`;

const ButtonSendToEmail = styled.a`
	width: 80%;
	margin: 0 auto;
	height: 48px;
	${Flex()};
	background-color: #F4F4F4;
	color: rgb(0,0,0,.54);
	border-radius: 24px;
	cursor: pointer;
	font-weight: bold;
	transition: background-color .3s;

	&:hover {
		background-color: var(--color-base);
		color: #fff;
	}
`;

export {
	MentorCardContainer,
	ContainerImage,
	ContainerAvatarUser,
	AvatarImage,
	ContainerContactUs,
	ContainerInformation,
	ContentUser,
	Description,
	Username,
	Work,
	ButtonSendToEmail
}