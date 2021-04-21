import { ACTIONS, IUserAnswer } from "../types";

export default (answer : IUserAnswer[]) => ({
	type : ACTIONS.SET_USER_ANSWER,
	payload : answer
});