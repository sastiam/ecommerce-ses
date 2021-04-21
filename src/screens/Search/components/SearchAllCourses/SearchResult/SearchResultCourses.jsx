import React from "react";
import useFetchCourses from "screens/Search/hooks/useFetchCourses";
import SearchCoursesLoading from "../SearchComponents/SearchCoursesLoading";
import SearchCoursesEmpty from "./SearchCoursesEmpty";
import SearchCoursesPreview from './SearchCoursesPreview';

const SearchResultCourses = () => {
	const { loading, courses, empty } = useFetchCourses();
	if (loading)	return <SearchCoursesLoading />
	if(empty) return <SearchCoursesEmpty/>
	return <SearchCoursesPreview data={courses}/>
};
export default SearchResultCourses;
