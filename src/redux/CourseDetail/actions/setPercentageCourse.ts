import { ACTIONS } from "../types";

export default (percentage) => ({
	type : ACTIONS.SET_PERCENTAGE_COURSE,
	payload : percentage
})