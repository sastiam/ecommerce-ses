import produce from "immer";
import { handleActions } from "redux-actions";
import { resetClassroomData } from "../progressClasses/actions";
import { ActionUpdateCommentClass, CommentClassesState } from "screens/CourseClassVideoPlayer/@types/types";
import { createComment, deleteCommentOfClassroom, getCommentClasses, updateReactionOfCommentClassroom } from "./actions";

const initialState : CommentClassesState.State = {
	comments: [],
	loading: true,
};

const commentClasses = handleActions({
		[getCommentClasses.loading.toString()] : produce((state : CommentClassesState.State) => {
			state.loading = true;
		}),
		
		[getCommentClasses.success.toString()]: produce((state : CommentClassesState.State, { payload }) => {
			state.comments = payload.comments;
			state.loading = false;
		}),

		[createComment.toString()] : produce((state : CommentClassesState.State,{payload}) => {
			state.comments = [ payload.comment, ...state.comments ];
		}),

		[updateReactionOfCommentClassroom.toString()] : produce((state : CommentClassesState.State,{payload} : ActionUpdateCommentClass) => {
			state.comments = state.comments.map((comment) => {
					if(comment.idClassComment === payload.comment.idClassComment) {
						let isReactions = Object.fromEntries(Object.entries(comment.isReactions).map(([ type ]) => {
							return [ type , type === payload.typeReaction ];
						})) as { like: boolean; dislike: boolean };
						return {
							...comment,
							like : payload.comment.like,
							dislike : payload.comment.dislike,
							isReactions,
						}
					}
					return {
						...comment,
					}
				})
		}),

		[deleteCommentOfClassroom.toString()] : produce((state :CommentClassesState.State,{payload}) => {
			state.comments = state.comments.filter(comment => comment.idClassComment !== payload.idClassComment);
		}),

		[resetClassroomData.toString()] : () => initialState
	},
	initialState
);

export default commentClasses;
