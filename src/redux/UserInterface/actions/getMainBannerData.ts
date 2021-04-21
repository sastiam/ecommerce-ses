import UserInterfaceRepository from "application/requests/UserInterfaceRepository";
import changeLoadingState from "./changeLoadingState";
import changeMainBannerData from "./changeMainBannerData";

export default () => async dispatch => {
	try {
		const UI = new UserInterfaceRepository();
		const data = await UI.getInformation();

		dispatch(changeMainBannerData(data));
	} catch (e) {
		console.log(e);
		dispatch(changeLoadingState('error'));
	}
}