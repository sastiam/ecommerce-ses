import React, { Fragment } from "react";
import { navigate } from "@reach/router";
import UserCard from "../../../../../components/pages/User/UserCard";

const EnrolledCourseSmallCards = ({ data }) => {
	return (
		<Fragment>
			{data.slice(1).map((e, i) => (
				<UserCard
					key={i}
					propsAvatar={{
						width: 150,
						height: 100,
					}}
					textTitle={e.title}
					textBody={`${e.enrolledStudents} Alumnos inscritos`}
					image={e.imagePreview}
					points={e.punctuation}
					progress={e.userPercentage}
					onClick={() => navigate(`/course/${e.id}`)}
				/>
			))}
		</Fragment>
	);
};

export default EnrolledCourseSmallCards;
