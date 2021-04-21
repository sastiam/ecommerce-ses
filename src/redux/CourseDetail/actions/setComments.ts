import { ACTIONS } from "../types";
import { ICourseComment } from "application/metadata/interfaces/Course/Comment";

export default (comments : ICourseComment[]) => ({
	type : ACTIONS.SET_COMMENTS,
	payload : {
		comments
	}
})