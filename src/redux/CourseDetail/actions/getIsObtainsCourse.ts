import UserRepository from "application/requests/UserRepository";
import getIsApprovedCourse from "./getIsApprovedCourse";
import getPercentageCourseProgress from "./getPercentageCourseProgress";
import setIsObtainsCourse from "./setIsObtainsCourse";
import setLoadingData from "./setLoadingData";

export default (idCourse : number, idUser : number) => async dispatch => {
	try {
		const User = new UserRepository();
		const isObtains = await User.IsObtainsCourse({ idCourse, idUser });
		if(isObtains){
			dispatch(getPercentageCourseProgress(idCourse,idUser));
			dispatch(getIsApprovedCourse(idCourse,idUser))
		}
		
		dispatch(setIsObtainsCourse(isObtains));
		dispatch(setLoadingData(false));
	} catch (e) {
		console.log(e);
	}
}