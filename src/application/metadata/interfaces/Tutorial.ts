import { FileURL } from "../types";

export interface ICategory {
	idTutorialCategory : number;
	name : string;
}

export interface IConstructionNet {
	idTutorial : number,
	title : string,
	description : string,
	imagePreview : FileURL,
	videoFile : FileURL,
	createDate : string,
	category : string,
	idTutorialCategory : number
}