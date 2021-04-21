import { ICourse, ICoursePercentage } from "application/metadata/interfaces/Course";
import { ICourseComment } from "application/metadata/interfaces/Course/Comment";
import { ICourseModuleState } from "application/metadata/interfaces/Course/Module";
import { IMentor, IUserPunctuactionState } from "application/metadata/interfaces/User";

export const ACTIONS = {
	SET_COURSE_DATA : 'update-course-data',
	SET_IS_MENTOR : 'update-is-mentor',
	SET_IS_OBTAINS : 'update-is-obtains',
	SET_IS_FAVORITE : 'update-is-favorite',
	SET_PERCENTAGE_COURSE : 'update-percentage-course',
	SET_COMMENTS : 'get-comments',
	SET_MODULES : 'get-modules',
	SET_COMMENTS_FRONT : 'update-comments',
	CLEAR_COURSE_DETAIL_STATE : 'clear-course-detail',
	ADD_NEW_COMMENT : 'add-new-comment',
	DELETE_COMMENT : 'delete-comment',
	SET_LOADING_DATA : 'set-loading-data',
	SET_CERTIFICATE : 'set-certificate',
	SET_CERTIFICATE_LOADING : 'set-certificate-loading',
	SET_IS_APPROVED_COURSE : 'set-is-approved-course'
}

export type CertificateState = 'obtains' | 'loading' | 'not-loading';

export interface ICourseDetailStore {
	course : {
		data : ICourse,
		mentor : IMentor,
		puntuaction : IUserPunctuactionState,
		comments : {
			list : ICourseComment[];
			isLoading : boolean;
		},
		modules : ICourseModuleState[],
		progress : {
			data : ICoursePercentage;
			isLoading : boolean;
		},
		totalStudents : any;
		certificate : {
			value : {
				certificateId : number;
				fullName : string;
				courseName : string;
				dateDone : string,
				hoursDuration : number;
			};
			state : CertificateState;
		}
	},
	user : {
		isMentor : boolean;
		isObtainsCourse : boolean;
		isObtainsLoading : boolean;
		isFavorite : boolean;
		isApprovedCourse : boolean;
	},
	isLoading : boolean,
}