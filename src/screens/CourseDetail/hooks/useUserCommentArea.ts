import { useContext, FormEvent, ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

//Application
import CourseCommentRepository from "application/requests/CourseCommentRepository";

//Context
import { AuthContext } from "context/Auth";

//Interfaces
import { IRequestCreateCourseComment } from "application/metadata/interfaces/Course/request";

//Hooks
import useParameters from "hooks/useParameters";
import addNewComment from "redux/CourseDetail/actions/addNewComment";

const useUserCommentArea = () => {
	const [ inputValue , setInputValue ] = useState<string>("");
	
	const { id } = useParameters();
	const dispatch = useDispatch();
	const { userAuthInformation } = useContext(AuthContext);

	const InputChangeValue = (ev : ChangeEvent<HTMLInputElement>) => {
		let text = ev.currentTarget.value;
		setInputValue(() => text);
	}

	const CreateNewComment = async (ev : FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		let formatedText = inputValue.trim();
		
		if(formatedText && formatedText.length <= 150 && id){
			const { idUser } = userAuthInformation!;

			const commentData : IRequestCreateCourseComment = {
				idCourse : id,
				idUser,
				textContent : formatedText
			};

			const Course = new CourseCommentRepository();
			const commentCreate = await Course.CreateComment(commentData);

			if(commentCreate){
				setInputValue(() => "");
				dispatch(addNewComment(commentCreate));
			}else{
				console.log('Ocurrio un error.');
			}
		}
	}
	
	return {
		inputValue,
		InputChangeValue,
		CreateNewComment
	}
}

export default useUserCommentArea;