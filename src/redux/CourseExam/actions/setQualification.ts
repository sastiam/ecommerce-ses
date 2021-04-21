import { ACTIONS, IQualification } from "../types";

export default (qualifications : IQualification[]) => ({
	type : ACTIONS.SET_QUALIFICATIONS,
	payload : qualifications
});