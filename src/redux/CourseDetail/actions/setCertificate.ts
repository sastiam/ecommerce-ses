import { ACTIONS } from "../types";

export default (value : string) => ({
	type : ACTIONS.SET_CERTIFICATE,
	payload : value
})