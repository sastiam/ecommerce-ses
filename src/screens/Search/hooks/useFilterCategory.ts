import { TReduxState } from "application/metadata/types";
import { shallowEqual, useSelector } from "react-redux";

export default function useFilterCategory() {
	const filterCategory = useSelector<TReduxState,string>(
		(state) => state.searchCourses.filterCategory,
		shallowEqual
	);
	return filterCategory;
}
