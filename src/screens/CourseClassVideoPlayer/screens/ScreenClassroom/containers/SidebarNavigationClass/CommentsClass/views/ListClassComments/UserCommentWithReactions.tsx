import React from "react";
import useAuth from "screens/CourseClassVideoPlayer/hooks/useAuth";
import { deleteClassComment, reactToClassComment } from "screens/CourseClassVideoPlayer/store/commentClasses/actionCreators";
import useCheckMentorTeachCourse from "screens/CourseClassVideoPlayer/shared/hooks/useCheckMentorTeachCourse";
import parseTimeAgo from "screens/CourseClassVideoPlayer/shared/utils/parseTimeAgo";
import { useCourseClassroomDispatch } from "screens/CourseClassVideoPlayer/store";
import ReactionThumbButton from "../../components/ReactionThumbButton";
import UserComment from "../../components/UserComment";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";


type Reaction = {
	totalReactions : number,
	isReaction : boolean,
	reaction : "like" | "dislike",
	typeReaction : "up" | "down"
}
type UserCommentWithReactionsProps = {
	commentId: number;
	dateCreated: string;
	textComment: string;
	user: {
		avatar: string;
		idUser: number;
		name: string;
	};
	reactions : Reaction[]
};
const UserCommentWithReactions = (props: UserCommentWithReactionsProps) => {
	const checkMentorTeachCourse = useCheckMentorTeachCourse();
	const { userAuthInformation } = useAuth();
	const dispatch = useCourseClassroomDispatch() as ThunkDispatch<{},{},AnyAction>;

	
	/**
	 * Event to react comment if is like or dislike...
	 */
	const onClickReaction = (typeReaction) => () => {
		const validateIsPrevReaction = props.reactions.find(reaction => reaction.reaction === typeReaction);
		if(validateIsPrevReaction && !validateIsPrevReaction.isReaction) {
			dispatch(reactToClassComment({
				idUser : userAuthInformation?.idUser,
				idClassComment : props.commentId,
				typeReaction
			}));
		}
	};
	
	/**
	 * Delete comment if the user is the teacher of the course
	 */
	const onDeleteComment = () => {
		dispatch(deleteClassComment(props.commentId));
	};

	return (
		<UserComment
				commentId={props.commentId}
				daysAgo={parseTimeAgo(props.dateCreated)}
				textComment={props.textComment}
				user={props.user}
				acceptDelete={checkMentorTeachCourse}
				onDelete={onDeleteComment}
				renderReactionsChildren={() => (
					props.reactions.map((commentReaction,key) => (
							<ReactionThumbButton
							  key={key}
								type={commentReaction.typeReaction}
								isReaction={commentReaction.isReaction}
								onClick={onClickReaction(commentReaction.reaction)}
								totalReactions={commentReaction.totalReactions}
							/>
						))
				)}
		/>
	);
};

export default UserCommentWithReactions;
