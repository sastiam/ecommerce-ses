import { ICourseDetailStore } from "./types";

export const initialState : ICourseDetailStore = {
	course : {
		data : {
			id : -1,
			idCourseCategory : -1,
			idLevel : -1,
			idMentor : -1,
			category : '',
			free : false,
			imagePreview : '',
			mentor : '',
			offert : 0,
			price : 0,
			punctuation : 0,
			title : '',
			videoPreview : '',
			classFile : ''
		},
		mentor : {
			idUser : -1,
			email : '',
			fullName : '',
			location : '',
			personalInformation : {
				description : '',
				habilities : '',
				program : '',
				work : ''
			},
			profileBackgroundImage : '',
			profileImage : '',
			username : ''
		},
		puntuaction : {
			amount : 0,
			usersPuntuaction : []
		},
		comments : {
			list : [],
			isLoading : true
		},
		modules : [],
		progress : {
			data : {
				classesCompleted : 0,
				courseClassMax : 0
			},
			isLoading : true
		},
		totalStudents : {},
		certificate : {
			state : 'loading',
			value : {
				certificateId : -1,
				courseName : '',
				fullName : '',
				dateDone : '',
				hoursDuration : 0
			}
		}
	},
	user : {
		isMentor : false,
		isObtainsCourse : false,
		isObtainsLoading : true,
		isFavorite : false,
		isApprovedCourse : false
	},
	isLoading : true
}