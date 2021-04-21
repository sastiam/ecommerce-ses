import { IMentor } from "application/metadata/interfaces/User";

const base = "mentors";

export const ACTIONS = {
	GET_MENTORS: `${base}-get-mentors`,
	GET_MENTORS_SUCCESS: `${base}-get-mentors-complete`,
	GET_MENTORS_LOADING: `${base}-get-mentors-loading`,
};

export interface IMentorsStore {
	mentors: IMentor[];
	loading: boolean;
}
