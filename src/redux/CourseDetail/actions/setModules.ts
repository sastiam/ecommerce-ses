import { ACTIONS } from "../types";
import { ICourseModuleState } from "application/metadata/interfaces/Course/Module";

export default (modules : ICourseModuleState[]) => ({
	type : ACTIONS.SET_MODULES,
	payload : modules
})