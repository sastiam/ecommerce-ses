import { ICourseComment } from "application/metadata/interfaces/Course/Comment";
import { ACTIONS } from "../types";

export default (comment : ICourseComment) => ({
	type : ACTIONS.ADD_NEW_COMMENT,
	payload : comment
})