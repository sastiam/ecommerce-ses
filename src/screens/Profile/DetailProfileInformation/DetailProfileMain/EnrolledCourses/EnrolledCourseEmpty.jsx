import React from "react";
import RecommendationList from "../../../../../components/pages/Courses/RecommendationList";
import MessageEmptyResult from "../../../../../components/pages/Courses/MessageEmptyResult";
import ShowUserOnly from "../../../../../components/pages/User/ShowUserOnly";

const optionsMessage = {
	user : {
		title: "Sin cursos",
		message:	"Aún no tienes cursos inscritos, puedes explorar los cursos que tenemos para tí",
		textLink: "ir a explorar",
	},
	userExternal : {
		title: "Sin cursos",
		message:	"No tiene cursos que enseñe o esté inscrito",
		textLink: "conocer mas cursos",
	},
};

const ui = {
	padding: {
		paddingBottom: "5em",
	},
};

const EnrolledCourseEmpty = () => {
	return (
		<div style={{width:"100%"}}>
			<ShowUserOnly
				isUsername={
						<MessageEmptyResult
							{...optionsMessage.user}
							{...ui}
							/>
				}
				notIsUsername={
					<MessageEmptyResult 
					{...optionsMessage.userExternal}
					{...ui} 
					/>
				}
			/>
			<ShowUserOnly>
				<RecommendationList horizontal/>
			</ShowUserOnly>
		</div>
	);
};

export default EnrolledCourseEmpty;
