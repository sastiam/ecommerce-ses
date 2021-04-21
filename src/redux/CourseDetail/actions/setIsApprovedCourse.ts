import { ACTIONS } from "../types";

export default (isApproved : boolean) => ({
	type : ACTIONS.SET_IS_APPROVED_COURSE,
	payload : isApproved
});