import MessageEmptyResult from 'components/pages/Courses/MessageEmptyResult';
import { PanelEditorMyCoursesContext } from 'context/PanelEditorMyCourses';
import React, { useContext } from 'react'
import CoursePersonalCard from './PersonalComponents/CoursePersonalCard';
import CourseTeachingCard from './PersonalComponents/CourseTeachingCard';
import GridCoursePreview from './PersonalComponents/GridCoursePreview';

const CoursesPersonalTeachingPreview = () => {
	const { personalCourses } = useContext(PanelEditorMyCoursesContext);
	const emptyDataComponent = <MessageEmptyResult
		title="Sin cursos"
		message="Aún no tienes cursos enseñando"
		textLink="buscar cursos"
		link="/search"
	/>

	return (
		<GridCoursePreview data={personalCourses} emptyDataComponent={emptyDataComponent}>
			{(current, index) => current.teaching ?
				<CourseTeachingCard key={index} {...current} /> : 
				<CoursePersonalCard
					key={index} 
					{...current}
					idCourse={current.id}
					image={current.imagePreview}
					progress={current.userPercentage}
				/>
			}
		</GridCoursePreview>
	)
}

CoursesPersonalTeachingPreview.defaultProps = {
	data: []
}

export default CoursesPersonalTeachingPreview
