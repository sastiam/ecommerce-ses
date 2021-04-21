import { createStore , combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import enhanceMiddleware from './devtools';

//Reducers
import mentors from './Mentors';
import courseDetail from './CourseDetail';
import userInterface from './UserInterface';
import constructionNet from './ConstructionNet';
import courseExam from './CourseExam';
import searchCourses from './SearchCourses';

export const reducers = combineReducers({
	constructionNet,
	mentors,
	userInterface,
	courseDetail,
	courseExam,
	searchCourses,
});

const store = createStore(
	reducers,
	enhanceMiddleware(applyMiddleware(thunk))
);

export default store;