import UserRepository from "application/requests/UserRepository";
import changeLoadingState from "./changeLoadingState";
import changeRecomendations from "./changeRecomendations";

export default (userId : number) => async dispatch => {
	try {
		const user = new UserRepository();
		const data = await user.GetCourseRecommendation(userId);

		dispatch(changeRecomendations(data));
	} catch (e) {
		console.log(e);
		dispatch(changeLoadingState('error'));
	}
}