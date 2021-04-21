import React from "react";
import UserCard from "../../../../../components/pages/User/UserCard";
import { navigate } from "@reach/router";

const CourseMainCard = ({ data }) => {
	const _data = data ? data[0] : false;
	if (_data) {
		return (
			<UserCard
				propsAvatar={{
					width: 300,
					height: 200,
				}}
				classNameImage="main-image"
				flexDirection="column"
				textBody={`${_data.enrolledStudents} Alumnos inscritos`}
				textTitle={_data.title}
				image={_data.imagePreview}
				points={_data.punctuation}
				progress={_data.userPercentage}
				onClick={() => navigate(`/course/${_data.id}`)}
			/>
		);
	}
	return null;
};

CourseMainCard.defaultProps = {
	data: [],
};

export default CourseMainCard;
