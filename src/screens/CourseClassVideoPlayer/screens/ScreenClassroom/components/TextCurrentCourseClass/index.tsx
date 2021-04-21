import React, { memo } from "react";
import { useMediaQuery } from "react-responsive";
import useParameters from "hooks/useParameters";
import GlobalTitle from "components/common/GlobalTitle";
import TitleBold from "components/common/TitleBold";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "@reach/router";
import styled from "styled-components";
import { media } from "styles/responsive";
import {
	useCourseClassroomSelector,
} from "screens/CourseClassVideoPlayer/store";
import { shallowEqual } from "react-redux";


const StyledCurrentCourseClass = styled.div<{hover?:boolean}>`
	@import "styles/index.scss";
	position: absolute;
	top: 1.5em;
	left: 1.5em;
	padding: 1em;
	transition:opacity .3s;

	.go-back {
		display: flex;
		align-items: center;
		color: white;
		margin-top: 1em;
		&-text {
			margin-left: 10px;
			font-size: 13px;
			font-weight: bold;
		}
	}
	@media screen and (min-width:${media.mediaTabletMedium}) {
		opacity:${props => props.hover ? 1 : 0};
	}
	@media screen and (max-width:${media.mediaTabletMedium}) {
		position: static;
		.go-back {
			position: absolute;
			top: 0;
		}
	}
`


const TextCurrentCourseClass = () => {
	const { id } = useParameters();
	const hover = useCourseClassroomSelector((state) => state.ui.previewVideo.hover,shallowEqual);
	const [ titleCourse , titleClass ] = useCourseClassroomSelector(({progressClasses}) => [
		progressClasses.currentCourse.titleCourse,
		progressClasses.currentClass.title
	],shallowEqual);
	const isMobile = useMediaQuery({ maxWidth: 480 });
	return (
		<StyledCurrentCourseClass hover={hover}>
			<GlobalTitle
				text={titleCourse ? "Curso de " + titleCourse : ""}
				fontSize={isMobile ? ".34rem" : ".5rem"}
				autoWidth
				align="flex-start"
				paddingHorizontal="0px"
				paddingVertical="0px"
				color="white"
			/>
			<TitleBold color="white" fontSize="1.2em" fontWeight="normal">
				{titleClass}
			</TitleBold>
			<Link className="go-back" to={`/course/${id}`}>
				<FaArrowLeft />
				<div className="go-back-text">Regresar al curso</div>
			</Link>
		</StyledCurrentCourseClass>
	);
};

export default memo(TextCurrentCourseClass);
