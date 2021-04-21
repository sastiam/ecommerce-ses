import styled from "styled-components";

export const Container = styled.button`
	background: var(--color-base);
	color: #fff;
	font-size: 15px;
	font-weight: bold;
	border-radius : 25px;
	transition: .3s;

	&.ghost {
		border-radius: 0;
		background: #fff;
		color: var(--color-secondary);
		font-weight: 900;
	}

	&:hover {
		background: var(--color-secondary);

		&.ghost {
			background: none;
		}
	}
`;