import { TYPES } from "../types";

export default (courses : any[]) => ({
	type : TYPES.SET_RECOMENDATIONS,
	payload : courses
})