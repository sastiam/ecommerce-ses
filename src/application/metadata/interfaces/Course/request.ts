import { TReactionComment } from "../../types";

interface IRequestCourseCommentReaction {
	idCourseComment : number,
	idUser : number,
	reactionType : TReactionComment
}

interface IRequestCreateCourseComment {
	idCourse : number,
	idUser : number,
	textContent : string
}

interface IRequestCreatePuntuaction {
	idUser : number,
	idCourse : number,
	amount : number
}

export type {
	IRequestCourseCommentReaction,
	IRequestCreateCourseComment,
	IRequestCreatePuntuaction
}