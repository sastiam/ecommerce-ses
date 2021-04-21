import React, { useContext, FC } from "react";
import { AiOutlineLike , AiOutlineDislike } from "react-icons/ai";
import { BsTrash } from 'react-icons/bs';
import { navigate } from "@reach/router";
import "./index.scss";

//Hooks
import useImagesLocal from "hooks/useImagesLocal";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";
import useSetReaction from "screens/CourseDetail/hooks/useSetReaction";
import useDeleteComment from "screens/CourseDetail/hooks/useDeleteComment";

import IconReaction from "./IconReaction";

import { ICourseComment } from "application/metadata/interfaces/Course/Comment";

import { AuthContext } from "context/Auth";

interface IProps {
	userId? : number;
	listIndex : number,
	isTeacher : boolean,
	content : ICourseComment
}

const Comment : FC<IProps> = ({ listIndex , content , isTeacher , userId }) => {
	const { idCourseComment , fullName , profileImage, textContent , createDate , like , dislike , idUser } = content;
	const { user : { isObtainsCourse , isMentor } } = useCourseDetailRedux();

	//Date
	let current_date = Intl.DateTimeFormat("es-ES").format(new Date(createDate));

	//Hooks
	const { emptyImage } = useImagesLocal();
	const { CreateReaction , currentReaction } = useSetReaction(idCourseComment, listIndex);
	const { deleteComment } = useDeleteComment(idCourseComment);

	const navigateToUserProfile = () => navigate(`/users/${idUser}`);

	return <li className="comment">
		<div className="content-user-posting">
			<div className="image">
				<img src={profileImage ? profileImage : emptyImage} alt="user" className="img"/>
			</div>
			<div className="user">
				<span onClick={navigateToUserProfile} className="username">
					{`${fullName} ${isTeacher ? "(Yo)" : "" }`}
				</span>
				<span className="date">{current_date}</span>
			</div>
			{
				(idUser === idUser || isMentor) && (
					<div className="delete-icon" onClick={deleteComment} >
						<BsTrash />
					</div>
				)
			}
		</div>
		<div className="comment-content">
			<p className="content">{textContent}</p>
		</div>
		<div className="content-icons">
			<IconReaction 
				icon={<AiOutlineLike />} 
				onClick={CreateReaction("like")} 
				isActive={currentReaction !== -1 && currentReaction === 0 } 
				amount={like} 
				isLock={!isObtainsCourse && !isMentor}
			/>
			<IconReaction 
				icon={<AiOutlineDislike />}
				onClick={CreateReaction("dislike")} 
				isActive={currentReaction !== -1 && currentReaction === 1 }
				amount={dislike} 
				setSpacing={true} 
				isLock={!isObtainsCourse && !isMentor}
			/>
		</div>
	</li>
}

export default Comment;