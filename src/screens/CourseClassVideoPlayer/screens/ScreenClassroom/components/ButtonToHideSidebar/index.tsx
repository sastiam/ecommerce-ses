import React, { memo } from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import {
	useCourseClassroomDispatch,
	useCourseClassroomSelector,
} from "screens/CourseClassVideoPlayer/store";
import { toggleOpenNavigation } from "screens/CourseClassVideoPlayer/store/ui/actions";
import { useMediaQuery } from "react-responsive";
import { media } from "styles/responsive";

const StyledButton = styled.div<{hover:boolean}>`
	position: absolute;
	color: white;
	right: 0;
	font-size: 1.3em;
	width: 50px;
	height: 44px;
	background-color: var(--color-base-dark);
	display: flex;
	transition:opacity .3s;
	opacity:${props => props.hover ? 1 : 0};
	align-items: center;
	justify-content: center;
`;
const StyledIcon = styled.span<{ open: boolean }>`
	transition: transform 0.3s;
	line-height:0;
	transform: ${(props) => (props.open ? `rotate(0deg)` : `rotate(-180deg)`)};
`;


function ButtonToHideSidebar() {
	const dispatch = useCourseClassroomDispatch();
	const open = useCourseClassroomSelector((state) => state.ui.sidebar.open);
	const hover = useCourseClassroomSelector((state) => state.ui.previewVideo.hover);
	const onToggleNavigation = () => dispatch(toggleOpenNavigation());
	const isDesktop = useMediaQuery({ minWidth: media.mediaDesktopSmall });

	return isDesktop ? (
		<StyledButton onClick={onToggleNavigation} hover={hover}>
			<StyledIcon open={open}>
				<FiArrowRight />
			</StyledIcon>
		</StyledButton>
	) : null;
}

export default memo(ButtonToHideSidebar);
