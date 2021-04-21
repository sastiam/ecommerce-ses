import styled, { css } from "styled-components";

export const Container = styled.div`
	background-color: white;
	padding: 10px;
	transition: 0.3s;
	&:hover {
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
	}
`;

export const Flex = styled.div`
	display: flex;
	align-items: center;
	position: ${(props) => props.position};
`;

export const TextCard = styled.span`
	display: inline-block;
	color: ${(props) => props.smooth && "gray"};
	font-weight: ${(props) => props.weight && "bold"};
	font-size: 14px;
`;

export const ToolTipCard = styled.div`
	position: absolute;
	z-index: 1;
	font-size: 12px;
	padding: 10px;
	margin: ${(props) => props.margin && "10px"};
	color: ${(props) => props.color};
	background-color: ${(props) => props.background};
	border-radius: ${(props) => props.rounded && "5px"};
	${(props) =>
		({
			topLeft: css`
				left: 0;
				top: 0;
			`,
			bottomRight: css`
				right: 0;
				bottom: 0;
			`,
		}[props.position])}
`;

//New styles components

export const ContainerImage = styled.div`
	height: 160px;
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100%;
	height: inherit;
	object-fit: cover;
	border-radius: 10px;

	&:hover {
		filter: brightness(90%);
	}
`;

export const TextLink = styled.a`
	font-weight: bold;
	color: var(--color-dark);
	&:hover {
		color: var(--color-secondary);
	}
`;

export const ContainerStars = styled.div`
	padding-top: 5px;
`;

export const Star = styled.span`
	line-height: 0;
	display: inline-block;
`;

export const ButtonCard = styled.button`
	width: 100%;
	padding: .6em 0;
	border-radius: 20px;
	background-color: var(--color-base);
	color: #fff;
	font-weight: bold;
	transition: .3s;
	font-size: 14px;

	&:hover {
		background-color: var(--color-secondary);
	}
`;