import { IMentor } from "application/metadata/interfaces/User";
import { ACTIONS } from "../types";

export default (mentors: IMentor[]) => ({
	type: ACTIONS.GET_MENTORS_SUCCESS,
	payload: mentors,
});
