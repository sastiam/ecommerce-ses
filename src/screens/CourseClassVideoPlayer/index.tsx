import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import App from "./main/App";
import { CourseClassroomProvider } from "./store";

const CourseClassVideoPlayer = () => {
	return (
		<MainLayout titlePage="Fundamentos de diseño UX">
			<CourseClassroomProvider>
				<App />
			</CourseClassroomProvider>
		</MainLayout>
	)
};

export default CourseClassVideoPlayer;
