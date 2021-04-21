import { ACTIONS, ICourseExamStore } from "./types";
import produce from 'immer';

const initialState : ICourseExamStore = {
	questions : {
		data : [],
		loadingState : 'loading'
	},
	qualifications : {
		data : [],
		loadingState : 'loading'
	},
	userAnswers : [],
	isExamStart : false
}

const reducer = (state = initialState, action) : ICourseExamStore => produce(state, self => {
	switch(action.type){
		case ACTIONS.SET_QUESTIONS:
			self.questions.data = action.payload;
			self.userAnswers = new Array(self.qualifications.data.length);
			break;

		case ACTIONS.SET_QUALIFICATIONS:
			self.qualifications.data = action.payload;
			break;

		case ACTIONS.SET_LOADING_QUESTIONS:
			self.questions.loadingState = action.payload;
			break;

		case ACTIONS.SET_LOADING_QUALIFICATIONS:
			self.qualifications.loadingState = action.payload;
			break;

		case ACTIONS.SET_USER_ANSWER:
			self.userAnswers = action.payload;
			break;

		case ACTIONS.CLEAR_USER_ANSWERS:
			self.userAnswers = [];
			break;
		
		case ACTIONS.SET_IS_EXAM_START:
			self.isExamStart = action.payload;
			break;

		case ACTIONS.CLEAR_COURSE_EXAM_STATE:
			return initialState;

		case ACTIONS.SET_ONE_QUALIFICATION:
			self.qualifications.data.push(action.payload);
			break;
	}
});

export default reducer;