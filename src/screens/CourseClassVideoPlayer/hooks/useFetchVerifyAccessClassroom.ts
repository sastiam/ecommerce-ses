import useParameters from "hooks/useParameters";
import { useEffect } from "react";
import { shallowEqual } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import useCheckMentorTeachCourse from "../shared/hooks/useCheckMentorTeachCourse";
import { useCourseClassroomDispatch, useCourseClassroomSelector } from "../store";
import { fetchToVerifyObtainCourse } from "../store/progressClasses/actionCreators";
import useAuth from "./useAuth";

export default function useFetchVerifyAccessClassroom() {
	const { userAuthInformation, userAuth } = useAuth();
	const checkMentorTeachCourse = useCheckMentorTeachCourse();
	const dispatch = useCourseClassroomDispatch() as ThunkDispatch<{},{},AnyAction>;
	const { id, } = useParameters();
	const obtainCourse = useCourseClassroomSelector(state => state.progressClasses.obtainCourse,shallowEqual);
	const loadingObtainCourse = useCourseClassroomSelector(state => state.progressClasses.loadingObtainCourse,shallowEqual);

	const canAccess = checkMentorTeachCourse || obtainCourse || userAuth;
	useEffect(() => {
		dispatch(fetchToVerifyObtainCourse({
			idCourse : id,
			idUser : userAuthInformation?.idUser || 0
		}))
	},[id,userAuthInformation,dispatch])

	return {
		canAccess,
		loadingObtainCourse,
	}
}
