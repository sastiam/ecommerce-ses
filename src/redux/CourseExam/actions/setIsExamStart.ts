import { ACTIONS } from "../types";

export default (is_start : boolean) => ({
	type : ACTIONS.SET_IS_EXAM_START,
	payload : is_start
});