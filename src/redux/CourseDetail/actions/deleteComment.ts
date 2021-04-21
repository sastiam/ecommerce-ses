import { ACTIONS } from "../types";

export default (commentId : number) => ({
	type : ACTIONS.DELETE_COMMENT,
	payload : commentId
})