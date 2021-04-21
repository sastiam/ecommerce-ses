import React, { Fragment } from "react";
import EnrolledCourseSmallCards from "./EnrolledCourseSmallCards";
import CourseMainCard from "./CourseMainCard";

const MainEnrolledCourses = ({data}) => {
	return (
		<Fragment>
			<div className="row-courses">
				<CourseMainCard data={data} />
			</div>
			<div className="row-courses row-scrollable">
				<EnrolledCourseSmallCards data={data} />
			</div>
		</Fragment>
	);
};

MainEnrolledCourses.defaultProps = {
	data : []
}

export default MainEnrolledCourses;
