import React, { memo } from "react";
import "./index.scss";

//UI
import GlobalDiv from "../../../../../../components/common/GlobalDiv";
import TitleBold from "../../../../../../components/common/TitleBold";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";

const ContentInformation = () => {
	const { course } = useCourseDetailRedux();
	const { description } = JSON.parse(course.data.information);

	return <GlobalDiv className="content-information">
		<GlobalDiv>
			<GlobalDiv paddingBottom="2em">
				<TitleBold fontWeight="bold" color="var(--color-light)" fontSize="1.5em">¿Qué encontrarás en este curso?</TitleBold>
			</GlobalDiv>
			<p className="information-description">{description}</p>				
		</GlobalDiv>
	</GlobalDiv>
}

export default memo(ContentInformation);