import { Api } from "../../services";
import { IRequestCourseCommentReaction, IRequestCreateCourseComment } from "../../metadata/interfaces/Course/request";
import { ICourseComment } from "../../metadata/interfaces/Course/Comment";
import { TReactionComment } from "../../metadata/types";


class CourseCommentRepository {

	public GetCommentsByIdCourse = async (idCourse : number) : Promise<ICourseComment[]> => {
		try {
			const { data } = await Api.get(`courses/detail/comments&courseId=${idCourse}`);
			const comments = data.resource;
			return comments;
		}catch(e){
			console.log(e);
			return [];
		}
	}

	public AddReaction = async (data : IRequestCourseCommentReaction) : Promise<boolean> => {
		const requestData = new URLSearchParams({
			idCourseComment : String(data.idCourseComment),
			idUser : String(data.idUser),
			reactionType : String(data.reactionType)
		});
	
		try{
			const request = await Api.post("courses/update/reaction", requestData);
			const response = request.data.response;

			return response;
		}catch(e){
			console.log(e);
			return false;
		}
	}

	public CreateComment = async (data : IRequestCreateCourseComment) => {
		const requestData = new URLSearchParams({
			idCourse : String(data.idCourse),
			idUser : String(data.idUser),
			textContent : data.textContent
		});

		try{
			const request = await Api.post("courses/new/comment",requestData);
			return request.data;
		}catch(e){
			console.log(e);
			return null;
		}
	}

	public DeleteComment = async (commentId : number) => {
		const requestData = new URLSearchParams({
			idCourseComment : String(commentId)
		})

		try {
			const request = await Api.post("courses/delete/comment", requestData);
			return request.data;
		} catch (e) {
			console.log(e);
		}
	}

	public GetReactionType = async (idCourse : number, idUser : number) : Promise<TReactionComment> => {
		let requestData = new URLSearchParams({
			idCourseComment : String(idCourse),
			idUser : String(idUser)
		});

		try {
			const request = await Api.post("courses/check/comment",requestData);
			const { reactionType } = request.data.resource[0];
			return reactionType;
		}catch(e){
			console.log(e);
			return '';
		}
	}

}

export default CourseCommentRepository;