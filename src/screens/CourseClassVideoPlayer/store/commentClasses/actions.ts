import { createAction, createActions } from "redux-actions";

export const getCommentClasses = createActions("LOADING", "SUCCESS","EMPTY", {
	prefix: "classroom/classroom-comments",
});

export const createComment = createAction("CREATE_COMMENT_IN_CLASSROOM")

export const updateReactionOfCommentClassroom = createAction("UPDATE_REACTION_OF_COMMENT_CLASSROOM");

export const deleteCommentOfClassroom = createAction("DELETE_COMMENT_OF_CLASSROOM");