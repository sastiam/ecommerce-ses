import React, { Fragment, useContext } from 'react'
import CardboardAdvanceItem from "./CardboardAdvanceItem";
import { BsCameraVideo, BsPeople, BsBookmarks } from "react-icons/bs";
import { UserDetailContext } from '../../../../../context/UserDetail';

const PanelMentors = () => {
	const { panelInformation } = useContext(UserDetailContext);
	const {teachingCourses , enrolledStudents , enrolledCourses} = panelInformation;
	return (
		<Fragment>
		<CardboardAdvanceItem textItem="Cursos enseñando" total={teachingCourses} icon={<BsCameraVideo size={25} />} />
		<CardboardAdvanceItem textItem="Alumnos inscritos" total={enrolledStudents} icon={<BsPeople size={25} />} />
		<CardboardAdvanceItem textItem="Cursos inscritos" total={enrolledCourses} icon={<BsBookmarks size={25} />} />
	</Fragment>

	)
}

export default PanelMentors
