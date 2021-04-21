import styled, { css } from "styled-components";
import { Flex } from "../../../../../../../../styles/mixins";

interface IProps {
	isShopped : boolean,
	backgroundColor? : string
}

const Button = styled.div<IProps>`
	width: auto;
	height: 46px;
	background-color: ${({ backgroundColor }) => backgroundColor || '#F4F4F4'};
	color: ${({ backgroundColor }) => backgroundColor ? '#fff' : 'rgba(0,0,0,0.54)'}; 
	font-weight: 900;
	font-size: 15px;
	transition: background-color .3s;
	border-radius: 23px;
	cursor: pointer;
	${Flex()};

	svg {
		font-size: 1.3em;
	}

	&:hover {
		background-color: var(--color-base);
		color: #fff;
	}

	${({ isShopped }) => isShopped && css`
		background-color: var(--color-base);
		color: #fff;
	`}

	${({ backgroundColor }) => backgroundColor && css`
		&:hover {
			background-color: #fff;
			color: ${backgroundColor};
			border: 1px solid ${backgroundColor};
		}
	`}

`;

export {
	Button
}