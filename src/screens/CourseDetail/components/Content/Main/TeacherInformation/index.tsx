import React, { memo, FC } from "react";
import { Link } from "@reach/router";
import "./index.scss";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";

const TeacherInformation : FC = () => {
	const { course : { mentor } } = useCourseDetailRedux();
	const { idUser , fullName , personalInformation , profileImage } = mentor;
	const { description , work } = personalInformation;

	//Variables
	let descriptionCut = description?.substr(0,290) + "...";

	return <div className="teacher-information">
		<div className="teacher-data">
			<div className="image">
				<img className="img" src={profileImage ? profileImage : "https://s5.postimg.cc/537jajaxj/default.png"} alt=""/>
			</div>
			<div className="information">
				<span className="name">{fullName}</span>
				<span className="course">{work}</span>
			</div>			
		</div>
		<div className="teacher-description">
			<p className="description">{descriptionCut}</p>
		</div>
		<div className="about-teacher">
			<Link className="link" to={`/users/${idUser}`}>Conocer mas del Profesor</Link>
		</div>
	</div>
}

export default memo(TeacherInformation);