import { FileURL } from "../../types";

interface ICourseTemplate {
	title : string,
	offert : number,
	price : number,
	free : boolean,
	imagePreview : FileURL,
	videoPreview : FileURL,
}

interface ICourse extends ICourseTemplate {
	id : number,
	idLevel : number,
	idMentor : number,
	mentor : string,
	idCourseCategory : number,
	category : string,
	punctuation : number
	classFile : FileURL;
}

interface ICourseRecomendation extends ICourseTemplate {
	idCourse : number,
	idMentor : number,
	idLevel : number,
	idTutorial : number,
	classFile : FileURL,
	createDate : string,
	information : {
		audio? : string,
		description? : string,
		include? : string[] | string
	}
}

interface ICoursePercentage {
	classesCompleted : number,
	courseClassMax : number
}

export type {
	ICourse,
	ICourseRecomendation,
	ICoursePercentage
}