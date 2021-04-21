import React, { useContext, FC } from "react";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";
import { AuthContext } from "../../../../../../context/Auth";
import Comment from "./Comment";
import EmptyComments from "./EmptyComments";

interface IProps {
	max :number
}

const ListComments : FC<IProps> = ({ max }) => {
	//Context
	const { userAuthInformation } = useContext(AuthContext);
	const { user : { isMentor } , course : { comments : { list , isLoading } } } = useCourseDetailRedux();

	if(isLoading) return <div></div>

	//Actions
	const comments = [...list].slice(0, max);

	if(!comments.length) return <EmptyComments/>

	return (
		<ul>
			{
				comments.map((v,i) => (
					<Comment
						key={v.idCourseComment}
						listIndex={i}
						content={v}
						userId={userAuthInformation?.idUser}
						isTeacher={isMentor ? v.idUser === userAuthInformation!.idUser : false}
					/>
				))
			}
		</ul>
	);
};

export default ListComments;
