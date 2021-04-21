import UserRepository from "application/requests/UserRepository";
import setPercentageCourse from "./setPercentageCourse";

export default (idCourse : number, idUser : number) => async dispatch => {
	try {
		const User = new UserRepository();
		const percentage = await User.GetPercentageCourseProgress(idUser,idCourse);

		dispatch(setPercentageCourse(percentage));
	} catch (e) {
		console.log(e);
	}
}