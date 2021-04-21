import React, { useContext } from "react";
import "./index.scss";
import { UserDetailContext } from "../../../../../context/UserDetail";
import MainEnrolledCourses from "./MainEnrolledCourses";
import ShowUserOnly from "../../../../../components/pages/User/ShowUserOnly";
import EnrolledCourseEmpty from "./EnrolledCourseEmpty";
import CourseLoading from "../../../DetailProfileLoaders/CourseLoading";

const EnrolledCourses = () => {
	const { personalCoursesInformation, userData, loadingCourses } = useContext(UserDetailContext);

	if(loadingCourses) {
		return  <CourseLoading />
	}

	return (
		<div className="enrolled">
			<p className="enrolled-title">
				<ShowUserOnly
					isUsername={
						{
							1: "Mis cursos inscritos",
							2: "Mis cursos enseñando",
						}[userData.idTypeUser || 1]
					}
					notIsUsername={
						{
							1: "Cursos en los que está inscrito",
							2: "Cursos que enseña",
						}[userData.idTypeUser]
					}
				/>
			</p>
			<section className="enrolled-courses">
				{personalCoursesInformation.length !== 0 ? (
					<MainEnrolledCourses data={personalCoursesInformation} />
				) : (
					<EnrolledCourseEmpty typeUser={userData.idTypeUser} />
				)}
			</section>
		</div>
	);
};

export default EnrolledCourses;
