interface ICourseComment {
	idCourseComment : number,
	idCourse : number,
	course : string,
	textContent : string,
	createDate : string,
	idUser : number,
	fullName : string,
	username : string,
	profileImage : string,
	like : number,
	dislike : number
}

export type {
	ICourseComment
}