import CourseFavoriteRepository from "application/requests/CourseFavoriteRepository";
import setIsFavorite from "./setIsFavorite";

export default (idCourse : number, idUser : number) => async dispatch => {
	try {
		const CourseFavorite = new CourseFavoriteRepository();
		const isFavorite = await CourseFavorite.IsMyFavoriteCourse(idUser,idCourse);

		dispatch(setIsFavorite(isFavorite));
	} catch (e) {
		console.log(e);
	}
}