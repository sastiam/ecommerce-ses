import { useMatch } from "@reach/router";
import { Types } from "application/metadata/interfaces/Search/types";
import { TReduxState } from "application/metadata/types";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCourses } from "redux/SearchCourses/actions-creator";

interface IGetCourseSearch {
	courses: Types.ListWantedCourses;
	loading: boolean;
	checkingPageFilter: boolean;
	empty: boolean;
}

export default function useFetchCourses() {
	const dispatch = useDispatch();
	const category = useSelector<TReduxState, string>(
		(state) => state.searchCourses.filterCategory,
		shallowEqual
	);
	const { checkingPageFilter, ...courseSearchState } = useSelector<TReduxState,IGetCourseSearch>(({searchCourses}) => ({
			courses: searchCourses.courses,
			loading: searchCourses.loading,
			checkingPageFilter : searchCourses.checkingPageFilter,
			empty : searchCourses.empty,
		}),
		shallowEqual
	);

	useEffect(() => {
		if(checkingPageFilter) return;
		dispatch(getCourses(category));
	}, [category, dispatch,checkingPageFilter]);

	return courseSearchState;
}
