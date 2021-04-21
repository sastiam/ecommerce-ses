import React, { useContext } from "react";
import {
	Title,
	ContainerChipsCourses,
	ContainerFlexChips,
	ChipCourse,
} from "./styles";
import { UserDetailContext } from "context/UserDetail";

const CardboardChipsUserCourses = () => {
	const { personalCoursesInformation : courses } = useContext(UserDetailContext);
	
	if(courses.length === 0) return null;

	return (
		<ContainerChipsCourses>
			<Title>Cursos llevando</Title>
			<ContainerFlexChips>
				{courses.map((e, i) => (
					<ChipCourse key={i} w={200} >{e.title}</ChipCourse>
				))}
			</ContainerFlexChips>
		</ContainerChipsCourses>
	);
};

export default CardboardChipsUserCourses;
