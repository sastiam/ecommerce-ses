import React from "react";
import PanelTabsMainEditor from "../../../components/layouts/PanelTabsMainEditor";
import EditorMyCoursesLinks from "./EditorMyCoursesLinks";
import EditorMyCoursePanels from "./EditorMyCoursesPanels";
import { PanelEditorMyCoursesProvider } from "../../../context/PanelEditorMyCourses";

const EditorMyCourses = () => {
	return (
		<PanelEditorMyCoursesProvider>
			<PanelTabsMainEditor
				aside={<EditorMyCoursesLinks />}
				main={<EditorMyCoursePanels />}
			/>
		</PanelEditorMyCoursesProvider>
	);
};
export default EditorMyCourses;
