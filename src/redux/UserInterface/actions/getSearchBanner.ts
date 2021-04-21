import UserInterfaceRepository from "application/requests/UserInterfaceRepository";
import changeLoadingSearchBannerState from "./changeLoadingSearchBannerState";
import getSearchBannerSuccess from "./getSearchBannerSuccess";

export default () => async (dispatch) => {
	dispatch(changeLoadingSearchBannerState("loading"));
	try {
		const userInterface = new UserInterfaceRepository();
		const data = await userInterface.getSearchBanners();
		dispatch(changeLoadingSearchBannerState("complete"));
		dispatch(getSearchBannerSuccess(data))
	} catch {
		console.log("error");
	}
};
