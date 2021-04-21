import { ACTIONS } from "../types";

export default (isObtains : boolean) => ({
	type : ACTIONS.SET_IS_OBTAINS,
	payload : isObtains
})