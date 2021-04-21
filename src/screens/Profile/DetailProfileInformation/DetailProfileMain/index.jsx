import React from "react";
import LoadableComponent from "components/common/LoadableComponent";
import CardboardPanelLoading from "screens/Profile/DetailProfileLoaders/CardboardPanelLoading";
import CourseLoading from "screens/Profile/DetailProfileLoaders/CourseLoading";

const DetailProfileMain = () => {
	return (
		<div className="main">
			<LoadableComponent module={()=>import("./CardboardPanel")} fallback={<CardboardPanelLoading/>} />
			<LoadableComponent module={()=>import("./EnrolledCourses")} fallback={<CourseLoading/>} />
		</div>
	)
}

export default DetailProfileMain;
