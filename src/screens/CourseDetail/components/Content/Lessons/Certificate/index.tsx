import React, { memo } from 'react';
import { AiOutlineFileProtect , AiOutlineCheck } from 'react-icons/ai';

import useCourseDetailRedux from 'redux/CourseDetail/useCourseDetailRedux';
import useGetCertificate from 'screens/CourseDetail/hooks/useGetCertificate';
import CardLockTemplate from '../CardLockTemplate';

import CertificateDownload from 'application/services/Certificate/CertificateDownload';

const Certificate = () => {
	const { user : { isMentor , isApprovedCourse } } = useCourseDetailRedux();
	const { certificate , state } = useGetCertificate(isApprovedCourse || isMentor);
	const isUserCompletedExam = isMentor || (isApprovedCourse && state === 'obtains');

	const Download = () => {
		const download = new CertificateDownload();
		download.__invoke({
			id : String(certificate.certificateId || 0),
			course_name : certificate.courseName,
			createdAt : new Date(certificate.dateDone),
			study_hours : Number(certificate.hoursDuration).toFixed(1),
			user : certificate.fullName
		});
	};

	if(state === 'loading') return null;

	return (
		<CardLockTemplate
			title="Obtener certificado"
			unlockColor='#0FBF80'
			onClick={Download}
			lock={!isUserCompletedExam}
			IconLeft={<AiOutlineFileProtect />}
			IconRight={<AiOutlineCheck />}
		/>
	)
};

export default memo(Certificate);