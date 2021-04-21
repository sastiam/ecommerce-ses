import { ACTIONS, IQuestion } from "../types";

export default (questions : IQuestion[]) => ({
	type : ACTIONS.SET_QUESTIONS,
	payload : questions
})