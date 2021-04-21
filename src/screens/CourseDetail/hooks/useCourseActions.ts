import { IRequestCreatePuntuaction } from "../../../application/metadata/interfaces/Course/request";
import CourseRepository from "../../../application/requests/CourseRepostitory";
import CourseFavoriteRepository from "../../../application/requests/CourseFavoriteRepository";
import { useContext } from "react";
import { AuthContext } from "../../../context/Auth";
import useParameters from "../../../hooks/useParameters";
import setIsFavorite from "redux/CourseDetail/actions/setIsFavorite";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";
import { useDispatch } from "react-redux";
import { navigate } from "@reach/router";

const useCourseActions = () => {
	const { id } = useParameters();
	const { userAuthInformation , userAuth } = useContext(AuthContext);

	const { user : { isFavorite } } = useCourseDetailRedux();
	const dispatch = useDispatch();

	const AddPunctuation = async (amount : number, callbackSuccess = () => false, callbackError = () => true) => {
		const { idUser } = userAuthInformation!;

		const data : IRequestCreatePuntuaction = {
			idUser,
			idCourse : id,
			amount : amount
		};

		const courseRepo = new CourseRepository();
		const response = await courseRepo.CreatePuntuaction(data);

		if(response) callbackSuccess();
		else callbackError();
	}

	const ToggleFavoriteCourse = async () => {
		if(!userAuth){
			navigate("/login");
			return;
		}

		dispatch(setIsFavorite(!isFavorite));

		const FavoriteCourse = new CourseFavoriteRepository();
		const update = await FavoriteCourse.ChangeFavoriteCourse(userAuthInformation!.idUser,id);

		if(!update) {
			dispatch(setIsFavorite(!isFavorite));
		}
	}

	return {
		AddPunctuation,
		ToggleFavoriteCourse
	}
}

export default useCourseActions;