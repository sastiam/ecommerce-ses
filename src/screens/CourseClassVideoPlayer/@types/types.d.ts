import { Action } from "redux-actions";

export namespace UIState {
	export interface StateSidebar {
		open: boolean;
		width: string;
	}
	export interface StatePreviewVideo {
		hover: boolean;
	}

	export interface State {
		sidebar: StateSidebar;
		previewVideo: StatePreviewVideo;
	}
}

export interface CommentClass {
	dateCreate: string;
	fullName: string;
	idClassComment: number;
	idCourse: number;
	idUser: number;
	dislike: number;
	like: number;
	profileImage: string;
	textContent: string;
	isReactions: { like: boolean; dislike: boolean };
}
export namespace CommentClassesState {
	export interface State {
		loading: boolean;
		comments: CommentClass[];
	}
}

export interface ClassModule {
	completed: boolean;
	createDate: string;
	duration: number;
	idCourseClass: number;
	idCourseModule: number;
	title: string;
	videoClass: string;
}

export interface ModuleCourse {
	title: string;
	idCourseModule: number;
	classes: ClassModule[];
}

export namespace ProgressClassState {
	export interface State {
		currentCourse: {
			titleCourse: string;
			idMentor: number;
			idCourse: number;
		};
		currentClass: {
			idCourseClass: number;
			idCourseModule: number;
			title: string;
			videoClass: string;
			completed:boolean;
		};
		currentModule: {
			idCourseModule: number;
			title: string;
		};
		modulesCourse: ModuleCourse[];
		obtainCourse: boolean;
		loadingObtainCourse: boolean;
		loadingModulesCourse:boolean;
	}
}

export type ActionUpdateCommentClass = Action<{
	comment: CommentClass;
	typeReaction: string;
}>;
