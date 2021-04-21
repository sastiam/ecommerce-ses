import produce from 'immer';
import { initialState } from './initialState';
import { ACTIONS , ICourseDetailStore } from './types';

const reducer = (state = initialState , action) : ICourseDetailStore => produce(state, self => {
	switch(action.type){

		case ACTIONS.CLEAR_COURSE_DETAIL_STATE:
			self.course = initialState.course;
			self.isLoading = initialState.isLoading;
			self.user = initialState.user;
			break;

		case ACTIONS.SET_COURSE_DATA:
			self.course.data = action.payload.information;
			self.course.mentor = action.payload.mentor;
			self.course.puntuaction = action.payload.puntuaction;
			self.course.totalStudents = action.payload.totalStudents;
			break;

		case ACTIONS.SET_LOADING_DATA:
			self.isLoading = action.payload;
			break;

		case ACTIONS.SET_IS_MENTOR :
			self.user.isMentor = action.payload;
			break;

		case ACTIONS.SET_IS_APPROVED_COURSE:
			self.user.isApprovedCourse = action.payload;
			break;

		case ACTIONS.SET_IS_OBTAINS :
			self.user.isObtainsCourse = action.payload;
			self.user.isObtainsLoading = false;
			break;

		case ACTIONS.SET_PERCENTAGE_COURSE : 
			self.course.progress.data = action.payload;
			self.course.progress.isLoading = false;
			break;

		case ACTIONS.SET_COMMENTS:
			self.course.comments.list = action.payload.comments;
			self.course.comments.isLoading = false;
			break;

		case ACTIONS.SET_MODULES:
			self.course.modules = action.payload;
			break;

		case ACTIONS.SET_COMMENTS_FRONT : 
			self.course.comments.list = action.payload.comments;
			break;

		case ACTIONS.SET_IS_FAVORITE :
			self.user.isFavorite = action.payload;
			break;

		case ACTIONS.ADD_NEW_COMMENT:
			const comments = [...state.course.comments.list]
			comments.unshift(action.payload);
			self.course.comments.list = comments;
			break;

		case ACTIONS.DELETE_COMMENT:
			const comments_filtered = state.course.comments.list.filter(v => v.idCourseComment !== action.payload);
			self.course.comments.list = comments_filtered;
			break;

		case ACTIONS.SET_CERTIFICATE_LOADING:
			self.course.certificate.state = action.payload;
			break;

		case ACTIONS.SET_CERTIFICATE:
			self.course.certificate.value = action.payload;
			break;
	}
});

export default reducer;