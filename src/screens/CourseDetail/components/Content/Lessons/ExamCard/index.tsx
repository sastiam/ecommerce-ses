import React, { useCallback } from 'react';
import { AiOutlineFileDone, AiOutlineUnlock } from 'react-icons/ai';

import useCourseDetailRedux from 'redux/CourseDetail/useCourseDetailRedux';
import useProgressPercentage from 'hooks/useProgressPercentage';
import { useExamModalContext } from 'screens/CourseDetail/store/ExamModal/context';
import CardLockTemplate from '../CardLockTemplate';

const ExamCard = () => {
	const { course : { progress } , user : { isApprovedCourse , isMentor } } = useCourseDetailRedux();
	const { ChangeModalActive , ChangeModalType } = useExamModalContext();
	const { currentPercentage } = useProgressPercentage(progress.data.classesCompleted, progress.data.courseClassMax);

	const openModal = useCallback(() => {
		if(isApprovedCourse){
			ChangeModalType("qualifications");
			ChangeModalActive(true);
			return;
		}

		ChangeModalType("exam");
		ChangeModalActive(true);
	},[isApprovedCourse]);

	let titleCard = isMentor ? "(Profesor)" : (isApprovedCourse ? "(Aprobado)" : "");

	return (
		<CardLockTemplate 
			IconLeft={<AiOutlineFileDone />} 
			IconRight={<AiOutlineUnlock />}
			title={"Examen Final del Curso " + titleCard}
			lock={isMentor || (!isApprovedCourse && currentPercentage < 100)}
			onClick={openModal}
		/>
	);
}

export default ExamCard;