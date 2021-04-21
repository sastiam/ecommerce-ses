import React,{ Fragment, useContext} from 'react'
import CardboardAdvanceItem from "./CardboardAdvanceItem";
import { BsBookmarks, BsArchive, BsNewspaper} from "react-icons/bs";
import { UserDetailContext } from '../../../../../context/UserDetail';

const PanelStudent = () => {
	const { panelInformation } = useContext(UserDetailContext);
	const {enrolledCourses , completedCourses , recentCourses} = panelInformation;
	return (
		<Fragment>
		<CardboardAdvanceItem textItem="Cursos inscritos" total={enrolledCourses} icon={<BsBookmarks size={25} />} />
		<CardboardAdvanceItem textItem="Cursos terminados" total={completedCourses} icon={<BsArchive size={25} />} />
		<CardboardAdvanceItem textItem="Cursos recientes" total={recentCourses} icon={<BsNewspaper size={25} />} />
	</Fragment>

	)
}

export default PanelStudent
