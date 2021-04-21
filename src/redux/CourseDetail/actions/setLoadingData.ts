import { ACTIONS } from "../types";

export default (active : boolean) => ({
	type : ACTIONS.SET_LOADING_DATA,
	payload : active
})