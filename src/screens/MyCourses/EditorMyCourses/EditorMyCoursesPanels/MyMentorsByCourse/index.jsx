import React from "react";
import PanelEditorDescriptive from "../../../../../components/layouts/PanelTabsMainEditor/PanelEditorDescriptive";
import MyMentorsList from "./MyMentorsList";

const MyMentorsByCourse = () => {
	return (
		<PanelEditorDescriptive
			title="Mis mentores"
			message="Los mejores profesores estamos aquí para apoyarte en tu formación."
		>
			<MyMentorsList />
		</PanelEditorDescriptive>
	);
};

export default MyMentorsByCourse;
