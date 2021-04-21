import React, { useContext } from "react";
import CoursePersonalCard from "./PersonalComponents/CoursePersonalCard";
import { PanelEditorMyCoursesContext } from "../../../../../context/PanelEditorMyCourses";
import MessageEmptyResult from "../../../../../components/pages/Courses/MessageEmptyResult";
import GridCoursePreview from "./PersonalComponents/GridCoursePreview";

const CoursesPersonalFilterPreview = () => {
	const { personalCourses } = useContext(PanelEditorMyCoursesContext);

	const emptyDataComponent = <MessageEmptyResult
		title="Sin cursos"
		message="Aún no tienes cursos inscritos, puedes acceder a uno de ellos"
		textLink="buscar cursos"
		link="/search"
	/>
	
	return (
		<GridCoursePreview data={personalCourses} emptyDataComponent={emptyDataComponent}>
			{(current, index) => (
				<CoursePersonalCard
					key={index}
					image={current.imagePreview}
					title={current.title}
					free={current.free}
					idCourse={current.id}
					progress={current.userPercentage}
					punctuation={current.punctuation}
				/>
			)}
		</GridCoursePreview>
	);
};

export default CoursesPersonalFilterPreview;
