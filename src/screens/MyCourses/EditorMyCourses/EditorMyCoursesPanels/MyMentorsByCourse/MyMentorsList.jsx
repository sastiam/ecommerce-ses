import React, { useContext } from "react";
import { PanelEditorMyCoursesContext } from "../../../../../context/PanelEditorMyCourses";
import useImagesLocal from "../../../../../hooks/useImagesLocal";
import MessageEmptyResult from "../../../../../components/pages/Courses/MessageEmptyResult";
import "./index.scss";
import UserMentorCard from "screens/Mentors/components/ListAllMentors/UserMentorCard";


const MyMentorsList = () => {
	const { emptyImage } = useImagesLocal();
	const { personalMentors } = useContext(PanelEditorMyCoursesContext);

	if (personalMentors.length === 0)
		return (
			<MessageEmptyResult
				title="Sin mentores :("
				message="Al parecer no estás inscrito en algún curso"
				textLink="ir a los mentores"
				link="/mentors"
			/>
		);
	
	return (
		<div className="mentors-personal">
			{personalMentors.map(({ personalInformation: p, ...current }, i) => (
				<UserMentorCard
					key={i}
					sizeImage={140}
					image={current.profileImage || emptyImage}
					career={JSON.parse(p).work}
					detail={JSON.parse(p).description.substring(0, 40) + "..."}
					username={current.fullName}
					to={`/users/${current.username}`}
					hrefEmail={`mailto:${current.email}`}
				/>
			))}
		</div>
	);
};

export default MyMentorsList;
