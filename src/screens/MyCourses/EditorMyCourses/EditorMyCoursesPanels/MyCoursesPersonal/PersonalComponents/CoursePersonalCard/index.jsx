import React, { memo, useEffect, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { navigate } from "@reach/router";
import CourseClassRepository from "application/requests/CourseClassRepository";
import CourseCommonBaseCard from "../CourseCommonBaseCard";
import { Flex, TextCard, ToolTipCard } from "../CourseCommonBaseCard/styles";
import useProgressPercentage from "hooks/useProgressPercentage";
import GlobalDiv from "components/common/GlobalDiv";

const CoursePersonalCard = ({ free, progress, title, idCourse, image, punctuation }) => {
	const { currentPercentage } = useProgressPercentage(progress.classesCompleted, progress.courseClassMax);
	const [idCourseClass, setIdCourseClass] = useState(0);

	useEffect(() => {
		const courseClassRepo = new CourseClassRepository();
		courseClassRepo.getFirstVideoClass(idCourse).then(e => {
			setIdCourseClass(e.idCourseClass)
		});
	}, []);

	return (
		<CourseCommonBaseCard
			headerComponent={
				<ToolTipCard color="white" background="rgba(0,0,0,.7)" position="bottomRight" rounded margin>{currentPercentage}%</ToolTipCard>
			}
			free={free}
			image={image}
			title={title}
			punctuation={punctuation}
			idCourse={idCourse}
			textGlobalButton="Continuar curso"
			onClickGlobalButton={() => navigate(`/course/${idCourse}/${idCourseClass}`)}
		>
			<GlobalDiv paddingTop="1em" paddingBottom="1em">
				<TextCard smooth>
					<Flex>
						<AiOutlineClockCircle size={20} style={{ marginRight: 10 }} />{" "}
						{" " + currentPercentage + "% Completado"}
					</Flex>
				</TextCard>	
			</GlobalDiv>
		</CourseCommonBaseCard>
	);
};

export default memo(CoursePersonalCard);
