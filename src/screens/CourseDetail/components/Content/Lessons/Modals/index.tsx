import React from 'react';
import useCourseDetailRedux from 'redux/CourseDetail/useCourseDetailRedux';

import ExamModal from 'screens/CourseDetail/components/Modals/ExamModal';
import QualificationsModal from 'screens/CourseDetail/components/Modals/QualificationsModal';

import { useExamModalContext } from 'screens/CourseDetail/store/ExamModal/context';

const Modals = () => {
	const { user : { isObtainsCourse } } = useCourseDetailRedux();
	const { ExamModalType , ExamModalActive } = useExamModalContext();

	if(!ExamModalActive || !isObtainsCourse) return <></>;
	
	if(ExamModalType === 'exam')
		return <ExamModal />;
	else if(ExamModalType === 'qualifications')
		return <QualificationsModal />;
	else
		return <></>;
}

export default Modals;