import { ICourse } from "../../../application/metadata/interfaces/Course";

interface IAction {
	type : string,
	payload : any
}

interface IStore {
	searchMessage : string,
	courses : ICourse[],
	coursesFiltered : ICourse[],
	isLoading : boolean
}

export type {
	IAction,
	IStore
}