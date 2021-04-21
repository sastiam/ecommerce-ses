import { Api } from "application/services";
import { Dispatch } from "redux";
import { createComment, deleteCommentOfClassroom, getCommentClasses, updateReactionOfCommentClassroom } from "./actions";

interface IUserCourseProps {
	courseId : number;
	userId : number;
}
export const fetchAllCommentClasses = (props: IUserCourseProps) => async (dispatch : Dispatch) => {
	dispatch(getCommentClasses.loading());
	const { data : comments } = await Api.get(`class/comments&userId=${props.userId}&courseId=${props.courseId}`);
	dispatch(
		getCommentClasses.success({
			comments
		})
	);
};


interface ICreateCommentClass {
	idUser?: number;
	textContent : string;
	idCourse : number;
}
export const createNewCommentClass = (props : ICreateCommentClass) => (dispatch : Dispatch) => {
	const params = new URLSearchParams({
		idUser : String(props.idUser),
		textContent : String(props.textContent),
		idCourse : String(props.idCourse)
	})
	Api.post("class/comments/new",params).then(({data}) => {
		dispatch(createComment({
			comment : {
				...data,
				isReactions : {
					like : false,
					dislike: false
				}
			},
		}));
	})
}


interface IReactionCommentClass {
	idUser ?: number;
	idClassComment : number;
	typeReaction: string;
}
export const reactToClassComment = (props : IReactionCommentClass) => dispatch => {
	const params = {
		...props,
		idUser : String(props.idUser),
		idClassComment : String(props.idClassComment)
	};
	Api.post("class/comments/reaction",new URLSearchParams(params)).then(({data}) => {
		dispatch(updateReactionOfCommentClassroom({
			comment:data,
			typeReaction : props.typeReaction 
		}))
	})
}


export const deleteClassComment = (idClassComment: number) => dispatch => {
	const params = {
		idClassComment : String(idClassComment)
	}
	Api.post("class/comments/delete",new URLSearchParams(params)).then(({data}) => {
		if(data.deleted) dispatch(deleteCommentOfClassroom({idClassComment}))
	})
}