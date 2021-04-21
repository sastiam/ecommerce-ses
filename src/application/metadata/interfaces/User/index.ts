import { FileURL } from "../../types";

interface IPersonalInformation {
	description : string,
	work : string,
	habilities : string,
	program : string
}

interface IMentor {
	idUser : number,
	fullName : string,
	profileImage : FileURL,
	profileBackgroundImage : FileURL,
	location : string,
	email : string,
	username : string,
	personalInformation : Partial<IPersonalInformation>
}


interface IUser {
	idUser : number,
	profileImage : FileURL,
	username : string,
	fullName : string,
	idTypeUser ?: number
}

interface IUserPunctuaction {
	idCourse : number,
	idUser : number,
	username : string,
	fullName : string,
	amount : number,
	imagePreview : string
}

interface IUserPunctuactionState {
	amount : number,
	usersPuntuaction : IUserPunctuaction[]
}

export type {
	IMentor,
	IUser,
	IUserPunctuaction,
	IUserPunctuactionState
}