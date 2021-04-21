import styled, { css } from "styled-components";

interface IContainerProps {
	active? : boolean;
}

export const Container = styled.div<IContainerProps>`
	display : flex;
	justify-content : center;
	align-items : center;
	flex-direction: column;
	color: var(--color-light);
	cursor: pointer;

	${({ active }) => active && css`
		color : var(--color-secondary);
	`}

	&:hover {
		color: var(--color-secondary);
	}
`;

export const Icon = styled.span`
	line-height: 0;
	font-size: 1.6em;

	&:hover {
		transform: scale(1.1);
	}
`;

export const Text = styled.span`
	font-weight: bold;
`;