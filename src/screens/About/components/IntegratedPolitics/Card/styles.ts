import styled from "styled-components";
import { media } from "styles/responsive";

export const Text = styled.p`
	color: var(--color-star);
	font-size: .95em;
	font-weight: 600;
`;

export const Container = styled.div`
	width: 350px;
	height: 135px;
	border-radius: 0 15px 0 15px;
	background-color: var(--color-dark);
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 1.5em;
	margin-left: 1em;
	margin-bottom: 1em;

	&:first-child {
		margin-left : 0;
	}

	@media screen and (max-width:${media.mediaDesktopMedium}) {
		margin: 1em auto;
	}
	@media screen and (max-width:${media.mediaDesktopBig}) {
		margin: 1em;
	}

	@media screen and (max-width: 600px) {
		width: 90%;
		margin: 10px auto;

		&:first-child {
			margin-left: auto;
		}
	}

	@media screen and (max-width: 500px) {
		padding-top: 1em;
		padding-bottom: 1em;

		${Text} {
			font-size: .85em;
		}
	}

	@media screen and (max-width: 380px) {
		width: 100%;
		height: auto;
	}

`;
