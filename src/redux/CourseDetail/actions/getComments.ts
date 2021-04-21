import CourseCommentRepository from "application/requests/CourseCommentRepository";
import setComments from "./setComments";

export default (id : number) => async dispatch => {
	try {	
		const courseComments = new CourseCommentRepository();
		const comments = await courseComments.GetCommentsByIdCourse(id);

		dispatch(setComments(comments));
	}catch(e){
		console.log(e);
	}
}