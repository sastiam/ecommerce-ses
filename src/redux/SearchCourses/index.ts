import { handleActions } from "redux-actions";
import { ISearchCoursesStore } from "./types";
import { getSearchCourses, updateFilterCourses } from "./actions";

const initialState: ISearchCoursesStore = {
	loading: true,
	filterCategory: "",
	courses: [],
	checkingPageFilter : true,
	empty: false,
};

const reducer = handleActions({
		[updateFilterCourses.toString()]: (state, { payload }) => ({
			...state,
			checkingPageFilter: false,
			empty: false,
			filterCategory: payload.filterCategory,
		}),
		[getSearchCourses.loading.toString()]: (state) => ({
			...state,
			loading: true,
		}),
		[getSearchCourses.success.toString()]: (state, { payload }) => ({
			...state,
			courses: payload.courses,
			loading: false,
			checkingPageFilter: true,
			empty: false,
		}),
		[getSearchCourses.empty.toString()] : state => ({
			...state,
			loading: false,
			empty : true,
			checkingPageFilter: true,
		})
	},
initialState);

export default reducer;
