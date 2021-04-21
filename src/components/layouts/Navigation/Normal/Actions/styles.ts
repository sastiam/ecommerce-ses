import styled from "styled-components";
import { media } from "styles/responsive";

export const ContainerRelative = styled.div`
	height: var(--nav-height);
	position: relative;
`;

export const Container = styled.section`
	height: var(--nav-height);
	display: flex;
	align-items: flex-start;

	@media screen and (max-width : ${media.mediaDesktopBig}) {
		font-size: .9em;
	}
`;

export const ShoppingContainer = styled(ContainerRelative)``;
export const OtherContainer = styled(ContainerRelative)``;