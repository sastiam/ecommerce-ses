import { FileURL } from "../../../types";

//Class Information
interface ICourseModule {
	idCourseClass : number,
	idCourseModule : number,
	title : string,
	videoClass : FileURL,
	createDate : string
}

//State
interface ICourseModuleState {
	idCourseModule : number,
	title : string,
	classes : ICourseModule[]
}

//Request
interface ICourseModuleRequest {
	idCourse : number,
	titleCourse : string,
	idMentor ?: number,
	modulesCourse : ICourseModuleState[]
}

export type {
	ICourseModuleState,
	ICourseModuleRequest,
	ICourseModule
}