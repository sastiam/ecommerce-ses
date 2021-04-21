import React from "react";
import "./index.scss";
import VideoPlayerCourse from "components/pages/Courses/VideoPlayerCourse";
import { ClassroomPreviewVideo } from "screens/CourseClassVideoPlayer/shared/components/ClassroomLayout";
import ButtonToHideSidebar from "../../components/ButtonToHideSidebar";
import { useCourseClassroomDispatch, useCourseClassroomSelector } from "screens/CourseClassVideoPlayer/store";
import { setHoverPreviewVideo } from "screens/CourseClassVideoPlayer/store/ui/actions";
import TextCurrentCourseClass from "../../components/TextCurrentCourseClass";
import { shallowEqual } from "react-redux";
import useMarkAsCompletedClass from "screens/CourseClassVideoPlayer/hooks/useMarkAsCompletedClass";
import useChangeRouteClass from "screens/CourseClassVideoPlayer/hooks/useChangeRouteClass";

const PreviewVideoCurrentClass = () => {
	useChangeRouteClass();
	const dispatch = useCourseClassroomDispatch();
	const currentVideo = useCourseClassroomSelector(state => state.progressClasses.currentClass.videoClass,shallowEqual);
	const onMouseEnter = () => dispatch(setHoverPreviewVideo.onHover());
	const onMouseLeave = () => dispatch(setHoverPreviewVideo.offHover());
	const { markAsCompletedClass } = useMarkAsCompletedClass();
	const onVideoEnded = () => {
		markAsCompletedClass();
	} 

	return (
		<ClassroomPreviewVideo
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className="classroom__media">
				<div className="classroom__media--player" >
					<VideoPlayerCourse src={currentVideo} imagePreview="" autoplay onVideoEnd={onVideoEnded} />
				</div>
				<div className="classroom__current-class">
					<TextCurrentCourseClass />
				</div>
			</div>
			<ButtonToHideSidebar />
		</ClassroomPreviewVideo>
	);
};

export default PreviewVideoCurrentClass;
