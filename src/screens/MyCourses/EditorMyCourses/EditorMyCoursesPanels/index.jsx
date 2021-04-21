import React, { useContext } from "react";
import { Router } from "@reach/router";
import MyCoursesPersonal from "./MyCoursesPersonal";
import MyCoursesFavorites from "./MyCoursesFavorites";
import MyMentorsByCourse from "./MyMentorsByCourse";
import Loading from "../../../../components/common/Loading";
import { PanelEditorMyCoursesContext } from "../../../../context/PanelEditorMyCourses";


const EditorMyCoursePanels = () => {
	const { loading } = useContext(PanelEditorMyCoursesContext);
	if(loading) {
		return <Loading position="relative" center />
	}
	return (
		<Router primary={false}>
			<MyCoursesPersonal path="/" />
			<MyCoursesFavorites path="/favorites" />
			<MyMentorsByCourse path="/mentors" />
		</Router>
	);
};

export default EditorMyCoursePanels;
