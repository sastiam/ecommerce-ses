import React from "react";
import { ClassroomWrapper } from "../../shared/components/ClassroomLayout";
import SidebarNavigationClass from "./containers/SidebarNavigationClass";
import PreviewVideoCurrentClass from './containers/PreviewVideoCurrentClass'
import useFetchInitialData from "screens/CourseClassVideoPlayer/hooks/useFetchInitialData";
import useVideoClassExit from "screens/CourseClassVideoPlayer/shared/hooks/useVideoClassExit";

const ScreenClassroom = () => {
	useFetchInitialData();
	useVideoClassExit();

	return (
		<ClassroomWrapper>
			<PreviewVideoCurrentClass/>
			<SidebarNavigationClass/>
		</ClassroomWrapper>
	);
};

export default ScreenClassroom;
