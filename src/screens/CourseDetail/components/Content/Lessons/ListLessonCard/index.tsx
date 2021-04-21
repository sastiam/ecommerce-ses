import React, { memo } from "react";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";

//Components
import Certificate from '../Certificate';
import ExamCard from '../ExamCard';
import LessonCard from "../LessonCard";

const ListLessonCard = () => {
	const { course : { modules , data } } = useCourseDetailRedux();

	return <ul>
		{
			modules.map((v,i) => (
				<LessonCard 
					key={i} 
					moduleNumber={i + 1}
					title={v.title} 
					itemsHide={v.classes} 
				/>
			))
		}
		{!data.free && (
			<>
				<ExamCard />
				<Certificate />
			</>
		)}
	</ul>
}	

export default memo(ListLessonCard);