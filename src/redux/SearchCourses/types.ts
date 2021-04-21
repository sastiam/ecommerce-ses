import { Types } from "application/metadata/interfaces/Search/types";

export interface ISearchCoursesStore {
	filterCategory: string;
	loading: boolean;
	courses: Types.ListWantedCourses;
	checkingPageFilter : boolean;
	empty: boolean;
}
