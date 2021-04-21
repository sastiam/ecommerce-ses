import React from "react";
import "./index.scss";

import VideoPlayerCourse from "../../../../../components/pages/Courses/VideoPlayerCourse";
import GlobalDiv from "../../../../../components/common/GlobalDiv";
import CardInformationCourse from "./CardInformationCourse";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";

const Default = () => {
	const { 
		course : {
			data : { videoPreview , imagePreview }
		} 
	} = useCourseDetailRedux();

	return <div className="content-main-header">
		<GlobalDiv paddingHorizontal="3em" paddingVertical="4em" className="main-header-course">
			<div className="content-video">
				<VideoPlayerCourse imagePreview={imagePreview!} src={videoPreview!} />
			</div>
			<div>
				<CardInformationCourse />
			</div>
		</GlobalDiv>	
	</div>
}

export default Default;