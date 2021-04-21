import { useContext } from "react";
import { IRequestCourseCommentReaction } from "application/metadata/interfaces/Course/request";
import { AuthContext } from "context/Auth";
import CourseCommentRepository from "application/requests/CourseCommentRepository";
import setCommentsFront from "redux/CourseDetail/actions/setCommentsFront";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";
import { useDispatch } from "react-redux";

const useCommentReaction = () => {
	const { userAuthInformation } = useContext(AuthContext);
	const { course : { comments : { list } } } = useCourseDetailRedux();
	const dispatch = useDispatch();

	const ReactionSend = async (commentId : number, reactionType : "like" | "dislike") => {
		let requestData : IRequestCourseCommentReaction = {
			idCourseComment : commentId,
			idUser : userAuthInformation!.idUser,
			reactionType
		};
	
		const courseComment = new CourseCommentRepository();
		courseComment.AddReaction(requestData);
	}

	const ReactionFrontChange = (commentIndex : number, reactionType : "like" | "dislike") => {
		let current_comment = list.find((v,i) => i === commentIndex);
		if(!current_comment)
			return;

		current_comment = { ...current_comment };

		if(reactionType === "like"){
			current_comment.like = current_comment.like + 1; 
			current_comment.dislike = current_comment.dislike > 0 ? current_comment.dislike - 1 : 0; 
		}else if(reactionType === "dislike"){
			current_comment.dislike = current_comment.dislike + 1;
			current_comment.like = current_comment.like > 0 ? current_comment.like - 1 : 0; 
		}

		const comments = list.map((v,i) => i === commentIndex ? current_comment! : v);
		dispatch(setCommentsFront(comments));
	}

	return {
		ReactionSend,
		ReactionFrontChange
	}
}

export default useCommentReaction;