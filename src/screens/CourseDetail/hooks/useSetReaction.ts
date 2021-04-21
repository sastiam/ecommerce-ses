import { useContext, useEffect, useState } from "react";
import { AuthContext } from "context/Auth";

import useCommentReaction from './useCommentReactions';
import CourseCommentRepository from "application/requests/CourseCommentRepository";

export default (commentId : number, commentIndex : number) => {
	const [ currentReaction , setReaction ] = useState(-1);
	const { userAuth , userAuthInformation } = useContext(AuthContext);
	const { ReactionFrontChange , ReactionSend } = useCommentReaction();

	useEffect(() => {
		const GetReaction = async () => {
			if(!userAuth || !userAuthInformation) return;

			const { idUser } = userAuthInformation;
			const commentRepo = new CourseCommentRepository();
			const reactionType = await commentRepo.GetReactionType(commentId,idUser);

			let reaction = !reactionType ? -1 : (reactionType === "like" ? 0 : 1);
			setReaction(reaction);
		}

		GetReaction();
	},[]);

	const CreateReaction = (type : "like" | "dislike") => () => {
		let reaction_id = type === "like" ? 0 : 1;
		if(currentReaction === reaction_id)
			return;

		setReaction(() => reaction_id);
		ReactionSend(commentId, type);
		ReactionFrontChange(commentIndex, type);
	}

	return {
		currentReaction,
		CreateReaction
	}
}