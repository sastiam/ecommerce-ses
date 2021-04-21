import React from 'react'
import * as S from './styles';
import { navigate } from '@reach/router';
import { FaChalkboardTeacher } from 'react-icons/fa'
import CourseCommonBaseCard from '../CourseCommonBaseCard'
import { ToolTipCard } from "../CourseCommonBaseCard/styles";
import useProgressPercentage from "hooks/useProgressPercentage";

const CourseTeachingCard = ({ free, title, id, imagePreview, teaching, punctuation, userPercentage }) => {
	const { currentPercentage } = useProgressPercentage(userPercentage.classesCompleted, userPercentage.courseClassMax);
	const onClick = () => navigate(`/course/${id}`);

	return (
		<CourseCommonBaseCard
			idCourse={id}
			punctuation={punctuation}
			free={free}
			title={title}
			image={imagePreview}
			onClickGlobalButton={onClick}
			textGlobalButton="Ver curso"
			headerComponent={!teaching && (
				<ToolTipCard color="white" background="rgba(0,0,0,.7)" position="bottomRight" rounded margin>{currentPercentage}%</ToolTipCard>
			)}
		>
			<S.Container>
				<S.ContainerIcon>
					<S.Icon>
						<FaChalkboardTeacher />
					</S.Icon>
					<S.Text>Enseñando</S.Text>
				</S.ContainerIcon>
			</S.Container>
		</CourseCommonBaseCard>
	)
}

export default CourseTeachingCard
