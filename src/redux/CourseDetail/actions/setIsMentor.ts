import { ACTIONS } from "../types";

export default (isMentor : boolean) => ({
	type : ACTIONS.SET_IS_MENTOR,
	payload : isMentor
})