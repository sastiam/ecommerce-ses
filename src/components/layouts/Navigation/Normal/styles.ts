import styled from "styled-components";
import { media } from "styles/responsive";

export const Container = styled.div`
	/* FONT WEIGHT */
	--font-weight : 800;

	/*Color*/
	--color-text : rgb(39, 39, 39);
	--color-text-hover : var(--color-secondary);

	width: 100%;
	height: var(--nav-height);
	padding: 0 3em;
	position: relative;
	z-index: 2;
	display: flex;
	justify-content: space-between;

	@media screen and (max-width : ${media.mediaDesktopMedium}) {
		padding: 0 2em;
	}

	@media screen and (max-width : ${media.mediaTabletMedium}) {
		padding: 0 1.5em;
	}
`;

export const TitleContainer = styled.div`
	width: max-content;
	height: 100%;
	padding: 0 1em;
	text-transform: lowercase;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width : ${media.mediaDesktopMedium}) {
		width: 100%;
	}
`;