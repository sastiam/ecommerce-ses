import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { shallowEqual } from "react-redux";
import { useCourseClassroomDispatch, useCourseClassroomSelector } from "../store"
import { updateClassCompleteByUser } from "../store/progressClasses/actionCreators";
import useAuth from "./useAuth";
import { moveToNextClassModule } from "../store/progressClasses/actions";

export default function useMarkAsCompletedClass() {
	const currentClass = useCourseClassroomSelector(state => state.progressClasses.currentClass,shallowEqual);
	const dispatch = useCourseClassroomDispatch() as ThunkDispatch<{},{},AnyAction>;
	const { userAuthInformation } = useAuth();
	
	const markAsCompletedClass = () => {
		if(!currentClass.completed) {
			dispatch(updateClassCompleteByUser({
				idCourseClass  : currentClass.idCourseClass,
				idUser : userAuthInformation?.idUser || 0
			}));
		}
		else {
			dispatch(moveToNextClassModule());
		}
	}
	return {
		markAsCompletedClass
	}
}
