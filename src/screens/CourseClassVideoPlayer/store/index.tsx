import React,{ createContext } from "react";
import { createDispatchHook, createSelectorHook, Provider as ReduxProvider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import progressClasses from "./progressClasses"
import commentClasses from "./commentClasses"
import ui from "./ui"
import thunk from "redux-thunk";

/* -------------------------------- reducers -------------------------------- */

const reducers = combineReducers({
	 progressClasses,
	 commentClasses,
	 ui
}) 

/* ---------------------------- Redux base store ---------------------------- */

export const storeClassroom = createStore(reducers,applyMiddleware(thunk));
export type CourseClassroomRootState = ReturnType<typeof reducers>;

/* ------------------------------ Custom store ------------------------------ */

const courseClassroomContext = createContext<any>(null);
export const useCourseClassroomSelector = createSelectorHook<CourseClassroomRootState>(courseClassroomContext);
export const useCourseClassroomDispatch = createDispatchHook<CourseClassroomRootState>(courseClassroomContext);

export const CourseClassroomProvider : React.FC = ({children}) => {
	return(
		<ReduxProvider store={storeClassroom} context={courseClassroomContext}>
			{children}
		</ReduxProvider>
	)
}