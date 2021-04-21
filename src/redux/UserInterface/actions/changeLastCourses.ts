import { TYPES } from "../types";
import { TLoadingState } from "application/metadata/types";

export default (courses : any[], loadingState : TLoadingState) => ({
	type : TYPES.SET_LAST_COURSES,
	payload : {
		courses,
		loadingState
	}
})