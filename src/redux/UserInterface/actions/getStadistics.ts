import UserInterfaceRepository from "application/requests/UserInterfaceRepository";
import changeLoadingState from "./changeLoadingState";
import changeStadisticts from "./changeStadisticts";

export default () => async dispatch => {
	try {
		const UI = new UserInterfaceRepository();
		const data = await UI.getStadistics();
		
		dispatch(dispatch(changeStadisticts(data)));
	} catch (e) {
		console.log(e);
		dispatch(changeLoadingState('error'));
	}
}