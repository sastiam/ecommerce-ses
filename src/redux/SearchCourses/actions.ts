import { createAction, createActions } from "redux-actions";

export const updateFilterCourses = createAction("UPDATE_FILTER_COURSES");
export const getSearchCourses = createActions("LOADING", "SUCCESS","EMPTY", {
	prefix: "search-courses",
});


