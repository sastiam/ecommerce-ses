import { useContext, useEffect } from "react";
import { navigate } from "@reach/router";
import { useDispatch } from "react-redux";

import useParameters from "hooks/useParameters";

import { AuthContext } from "context/Auth";

import CourseRepository from "application/requests/CourseRepostitory";
import MentorRepository from "application/requests/MentorRepository";

import { IUserPunctuactionState } from "application/metadata/interfaces/User";

//Actions
import setIsMentor from "redux/CourseDetail/actions/setIsMentor";
import setCourseData from "redux/CourseDetail/actions/setCourseData";
import getIsFavoriteCourse from "redux/CourseDetail/actions/getIsFavoriteCourse";
import getIsObtainsCourse from "redux/CourseDetail/actions/getIsObtainsCourse";
import setClearCourseDetailState from "redux/CourseDetail/actions/setClearCourseDetailState";
import getModules from "redux/CourseDetail/actions/getModules";
import setLoadingData from "redux/CourseDetail/actions/setLoadingData";
import clearCourseExamState from "redux/CourseExam/actions/clearCourseExamState";

//Hook
const useCourseDetailInit = () => {
	const { id } = useParameters();
	const { userAuthInformation } = useContext(AuthContext);

	//Redux
	const dispatch = useDispatch();

	const _getCourseData = async (idCourse : number) => {
		const Course = new CourseRepository();
		const Teacher = new MentorRepository();

		const CurrentCourse = await Course.GetById(idCourse);
		if(!CurrentCourse){
			navigate('/');
			return;
		}

		const mentor = await Teacher.getById(CurrentCourse.idMentor);
		if(!mentor){
			console.log(mentor);
			return;
		}

		const usersPuntuaction = await Course.GetPuntuaction(id);
		const puntuaction : IUserPunctuactionState = {
			amount : CurrentCourse.punctuation,
			usersPuntuaction
		};

		const totalStudents = await Course.GetTotalStudents(idCourse);

		dispatch(setCourseData({
			information : CurrentCourse,
			mentor,
			puntuaction,
			totalStudents,
		}));		

		dispatch(getModules(idCourse));

		if(userAuthInformation){
			const { idUser } = userAuthInformation;
			const isMentor = idUser === mentor.idUser!;
			
			dispatch(setIsMentor(isMentor));
			dispatch(getIsObtainsCourse(idCourse,idUser));
			dispatch(getIsFavoriteCourse(idCourse, idUser));
		}else {
			dispatch(setLoadingData(false));
		}
	}

	useEffect(() => {
		_getCourseData(id);

		return () => {
			dispatch(setClearCourseDetailState());
			dispatch(clearCourseExamState());
		}
	},[]);
}

export default useCourseDetailInit;