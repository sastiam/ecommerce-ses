import { ICourseComment } from "application/metadata/interfaces/Course/Comment";
import { ACTIONS } from "../types";

export default (comments : ICourseComment[]) => ({
	type : ACTIONS.SET_COMMENTS_FRONT,
	payload : {
		comments
	}
})