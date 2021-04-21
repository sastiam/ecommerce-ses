import SearchRepository from "application/requests/SearchRepository";
import { getSearchCourses } from "./actions";

export const getCourses = (name : string) => async (dispatch) => {
	let search = new SearchRepository();
	let requestFilter: any = null;
	
	dispatch(getSearchCourses.loading());
	try {
		if (!name) requestFilter = search.getAllCourses();
		else if (name === "gratis") requestFilter = search.getFreeCourses();
		else requestFilter = search.getCoursesFiltered(name);

		const courses = await requestFilter;
		if(courses.length !== 0) dispatch(getSearchCourses.success({ courses }));
		else dispatch(getSearchCourses.empty());
	} catch {
		console.log("error");
	}
	
};
