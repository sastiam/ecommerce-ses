import { useDispatch } from "react-redux";

import deleteComment from "redux/CourseDetail/actions/deleteComment";
import CourseCommentRepository from "application/requests/CourseCommentRepository";

export default (commentId : number) => {
	const dispatch = useDispatch();

	const DeleteComment = async () => {
		const confirm = window.confirm("¿Deseas Borrar este comentario?");
		if(!confirm)
			return;

		dispatch(deleteComment(commentId));

		const Course = new CourseCommentRepository();
		const isDelete = await Course.DeleteComment(commentId);
		if(!isDelete){
			alert("Ocurrio un error al eliminar el comentario");
			return;
		}
	}

	return {
		deleteComment : DeleteComment
	};
}