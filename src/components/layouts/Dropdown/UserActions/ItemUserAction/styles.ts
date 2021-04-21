import styled from "styled-components";

export const Container = styled.li`
	padding: 10px 0;	
	background: #fff;
`;

export const Button = styled.button`
	background: inherit;
	color: var(--color-black);
	font-size: .9em;
	font-weight: 700;
	display: flex;
	align-items: center;

	&:hover {
		color: var(--color-secondary);
	}
`;

export const ButtonText = styled.span`
	padding-left: .5em;
`;