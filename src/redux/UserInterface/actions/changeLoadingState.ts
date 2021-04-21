import { TLoadingState } from "application/metadata/types";
import { TYPES } from "../types";

export default (loadingState : TLoadingState) => ({
	type : TYPES.SET_LOADING_STATE,
	payload : loadingState
})