import UserRepository from "application/requests/UserRepository";
import changeLastCourses from "./changeLastCourses";
import changeLoadingState from "./changeLoadingState";

export default (userId : number) => async dispatch => {
	try {
		const userRepo = new UserRepository();
		const data = await userRepo.GetLastCourse(userId);
		
		dispatch(changeLastCourses(data, "complete"));
	} catch (e) {
		console.log(e);
		dispatch(changeLoadingState('error'));
	}
}