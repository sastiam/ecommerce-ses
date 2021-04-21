interface IRequestObtainsCourse {
	idUser : number,
	idCourse : number
}

interface IRequestIsUserRegister {
	email : string,
	password : string
}

interface IRequestRegisterUser extends IRequestIsUserRegister {
	fullName : string
}

export type {
	IRequestObtainsCourse,
	IRequestIsUserRegister,
	IRequestRegisterUser
}