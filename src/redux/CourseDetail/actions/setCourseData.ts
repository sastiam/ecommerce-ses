import { ACTIONS } from "../types";

export default (data) => ({
	type : ACTIONS.SET_COURSE_DATA,
	payload : data
});