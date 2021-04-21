import React from "react";

//Components
import MainLayout from "../../components/layouts/MainLayout";
import Navigation from "../../components/layouts/Navigation";
import Content from "./components/Content";

//Hooks
import useCourseDetailInit from "./hooks/useCourseDetailInit";
import CourseDetailProvider from "./store/Global/provider";

const CourseDetail = () => {
	useCourseDetailInit();

	return <MainLayout titlePage="Cursos">
		<Navigation.Normal />
		<CourseDetailProvider>
			<Content />
		</CourseDetailProvider>
	</MainLayout>
};

export default CourseDetail;