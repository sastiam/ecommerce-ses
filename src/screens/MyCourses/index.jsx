import React from "react";
import Navigation from "../../components/layouts/Navigation";
import MainLayout from "../../components/layouts/MainLayout";
import EditorMyCourses from "./EditorMyCourses";
import FooterDetail from "../../components/layouts/FooterDetail";

const MyCourses = () => {
	return (
		<MainLayout titlePage="Mis Cursos">
			<Navigation.Normal />
			<EditorMyCourses />
			<FooterDetail />
		</MainLayout>
	);
};

export default MyCourses;
