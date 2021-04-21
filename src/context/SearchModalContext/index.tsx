import React, { createContext, FC, useReducer, useEffect } from "react";
import { ICourse } from "../../application/metadata/interfaces/Course";

//Reducer
import store from "./store";
import { reducer } from "./store/reducer";
import { ACTIONS_EVENTS } from "./store/reducer";
import { IStore } from "./interface";
import CourseRepository from "application/requests/CourseRepostitory";

//Interfaces
interface IContext extends IStore {
	updateSearchMessage(value : string) : void,
	updateCourse(value : ICourse[]) : void
}

const SearchModalContext = createContext<Partial<IContext>>({});
const SearchModalProvider : FC = ({ children }) => {
	//State
	const [ state , dispatch ] = useReducer(reducer,store);

	const actions = {
		updateSearchMessage : (value : string) => dispatch({ type : ACTIONS_EVENTS.UPDATE_SEARCH_MESSAGE , payload : value }),
		updateCourse : (value : ICourse[]) => dispatch({ type : ACTIONS_EVENTS.UPDATE_COURSES_FILTER , payload : value })
	}

	const _GetCourseSearchBase = async () => {
		const courseRepo = new CourseRepository();
		const payload = await courseRepo.GetAll();

		payload.length && dispatch({ type : ACTIONS_EVENTS.UPDATE_COURSES, payload })
	}

	useEffect(() => {
		_GetCourseSearchBase();
	},[]);

	return <SearchModalContext.Provider value={{
		...state,
		...actions
	}}>
		{ children }
	</SearchModalContext.Provider>
}

export {
	SearchModalContext,
	SearchModalProvider
}