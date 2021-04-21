import { ACTIONS, IQualification } from "../types";

export default (qualification : IQualification) => ({
	type : ACTIONS.SET_ONE_QUALIFICATION,
	payload : qualification
})