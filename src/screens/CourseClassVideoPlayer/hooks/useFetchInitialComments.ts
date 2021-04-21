import { useEffect } from "react";
import { shallowEqual } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useCourseClassroomDispatch, useCourseClassroomSelector } from "../store";
import { fetchAllCommentClasses } from "../store/commentClasses/actionCreators";
import useAuth from "./useAuth";

export default function useFetchInitialComments() {
	const dispatch = useCourseClassroomDispatch() as ThunkDispatch<{},{},AnyAction>;
	const comments = useCourseClassroomSelector(state => state.commentClasses.comments,shallowEqual);
	const loading = useCourseClassroomSelector(state => state.commentClasses.loading,shallowEqual);
	const courseId = useCourseClassroomSelector(state => state.progressClasses.currentCourse.idCourse,shallowEqual);
	const { userAuthInformation } = useAuth();
	useEffect(() => {
		if(userAuthInformation?.idUser && comments.length === 0) {
			 dispatch(fetchAllCommentClasses({courseId,userId:userAuthInformation.idUser}));
		}
	// eslint-disable-next-line
	},[dispatch,userAuthInformation,courseId]);

	return {
		comments,
		loading
	}
}
