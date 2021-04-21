import { TLoadingState } from "application/metadata/types";
import { ACTIONS } from "../types";

export default (state : TLoadingState) => ({
	type : ACTIONS.SET_LOADING_QUALIFICATIONS,
	payload : state
});