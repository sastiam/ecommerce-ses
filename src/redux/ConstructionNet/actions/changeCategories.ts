import { ACTIONS } from "../types";

export default (categories) => ({
	type : ACTIONS.CHANGE_CATEGORIES,
	payload : categories
})