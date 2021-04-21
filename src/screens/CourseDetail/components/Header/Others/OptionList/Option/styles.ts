import styled, { css } from "styled-components";

interface IContainerProps {
	active? : boolean;
}

export const Container = styled.button<IContainerProps>`
	display: flex;
	justify-content : center;
	align-items : center;
	margin: 0 10px;
	padding: 1.1em 10px;
	font-size: 17px;
	font-weight: 900;
	position: relative;
	background-color: #fff;
	color: rgb(200,200,200);
	transition: .3s;

	${({ active }) => active && css`
		color: var(--color-base);

		&::after {
			content : "";
			width: 100%;
			height: 2px;
			position: absolute;
			left: 0;
			bottom: -2px;
			border-bottom: 2px solid var(--color-base);

			@media screen and (max-width: 750px) {
				bottom : 0;
			}
		}
	`};

	@media screen and (max-width: 750px) {
		flex: none;
		font-size: 1em;
	}
`;

export const Icon = styled.span`
	line-height: 0;
`;

export const Text = styled.span`
	padding-left: .5em;
`;