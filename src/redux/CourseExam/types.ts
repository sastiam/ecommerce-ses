import { TLoadingState } from "application/metadata/types";

export const ACTIONS = {
	SET_QUESTIONS : 'set-questions',
	SET_LOADING_QUESTIONS : 'set-loading-questions',
	SET_LOADING_QUALIFICATIONS : 'set-loading-qualifications',
	SET_USER_ANSWER : 'set-user-answer',
	SET_QUALIFICATIONS : 'set-qualifications',
	CLEAR_USER_ANSWERS : 'clear-user-answers',
	CLEAR_COURSE_EXAM_STATE : 'clear-state',
	SET_ONE_QUALIFICATION : 'set-one-qualification',
	SET_IS_EXAM_START : 'set-is-exam-start'
}

export interface IUserAnswer {
	optionId : number;
}

export interface IAnswer extends IUserAnswer {
	option : string;
}

export interface IQuestion {
	courseId : number;
	options : IAnswer[];
	questionId : number;
	question : string;
}

export interface IQualification {
	userId : number;
	courseId : number;
	qualification : number;
	createdAt : string;
}

export interface ICourseExamStore {
	questions : {
		data : IQuestion[];
		loadingState : TLoadingState;
	};
	qualifications : {
		data : IQualification[];
		loadingState : TLoadingState;
	};
	userAnswers : IUserAnswer[];
	isExamStart : boolean;
}