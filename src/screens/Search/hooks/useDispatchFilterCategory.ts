import { useEffect } from "react";
import { useMatch } from "@reach/router";
import { useDispatch } from "react-redux";
import { updateFilterCourses } from "redux/SearchCourses/actions";

export default function useDispatchFilterCategory() {
	const dispatch = useDispatch();
	const match = useMatch("/search/:category");
	useEffect(() => {
		dispatch(updateFilterCourses({ filterCategory: match?.category || "" }));
	}, [match, dispatch]);
}
