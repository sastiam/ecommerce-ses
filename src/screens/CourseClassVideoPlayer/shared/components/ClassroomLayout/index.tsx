import styled from "styled-components";
import { media } from "styles/responsive";

export const ClassroomPreviewVideo = styled.div`
	width: 100%;
	height: 100%;
	display:flex;
	position: relative;
	transition:width .3s;
`;

export const ClassroomNavigation = styled.div`
	width: var(--width-sidebar);
	flex: none;
	margin: 0;
	overflow:hidden;
	display:flex;
	transition:width .3s;
	flex-direction:column;
`;

export const ClassroomWrapper = styled.div`
	--width-sidebar:340px;
	display: flex;
	align-items: stretch;
	height: 100vh;
	background-color: var(--color-base-dark);
	animation: course-player-animation 1s 1;
	@keyframes course-player-animation {
		from {
			opacity: 0.8;
		}
	}
	@media screen and (max-width: ${media.mediaDesktopSmall}) {
		flex-direction: column;
		overflow-y: none;
		${ClassroomPreviewVideo} {
			height: auto;
		}
		${ClassroomNavigation} {
			--width-sidebar:100%;
			flex: 1;
			overflow-y: auto;
		}
	}
`;
