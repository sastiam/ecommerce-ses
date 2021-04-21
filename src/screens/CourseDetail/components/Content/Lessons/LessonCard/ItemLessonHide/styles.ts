import styled from "styled-components";

export const Container = styled.li`
	height: var(--height);
	padding: 0 2em;
	display: flex;
	align-items: center;
	cursor: pointer;
	border-bottom: 1px solid rgb(240,240,240);

	&:hover {
		background-color: rgb(240,240,240);
	}
`;

export const Icon = styled.div`
	line-height: 0;
	padding-right: 10px;
	padding-bottom: 1.3em;
	color: var(--color-base);
	font-size: 1.1em;
`;

export const TextContainer = styled.div`
	display: grid;
`;

export const Title = styled.span`
	font-weight: bold;
`;

export const Duration = styled.span`
	padding-top: .5em;
	font-size: .8em;
	color: var(--color-light);
`;