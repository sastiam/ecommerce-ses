import useParameters from "hooks/useParameters";
import { useEffect } from "react";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useCourseClassroomDispatch } from "../store";
import { fetchAllCourseClassesOfUser } from "../store/progressClasses/actionCreators";
import { resetClassroomData } from "../store/progressClasses/actions";
import useAuth from "./useAuth";
import useLastTimeEntered from "./useLastTimeEntered ";

export default function useFetchInitialData() {
	const { id, classId } = useParameters();
	const dispatch = useCourseClassroomDispatch() as ThunkDispatch<{},{},AnyAction>;
	const { userAuthInformation } = useAuth();
	const lastTimeEnteredToClassroom = useLastTimeEntered();
	useEffect(() => {
		if (userAuthInformation?.idUser) {
			dispatch(fetchAllCourseClassesOfUser({
					classId,
					courseId: id,
					userId: userAuthInformation?.idUser,
			}));
			lastTimeEnteredToClassroom();
		}
		return () => {
			dispatch(resetClassroomData());
		}
	// eslint-disable-next-line
	},[]);
}
