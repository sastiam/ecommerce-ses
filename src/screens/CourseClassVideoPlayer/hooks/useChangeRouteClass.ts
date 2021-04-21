import { useCourseClassroomSelector } from "../store";
import { shallowEqual } from "react-redux"
import { useEffect } from "react";
import { replaceHistoryState } from "../shared/utils/historyState";



const replaceState = () => {

}

export default function useChangeRouteClass() {
	const courseId = useCourseClassroomSelector(state => state.progressClasses.currentCourse.idCourse,shallowEqual);
	const currentClass = useCourseClassroomSelector(state => state.progressClasses.currentClass,shallowEqual);
	const onNavigate = async (classId : number) => {
		replaceHistoryState(`/course/${courseId}/${classId}`);
	}

	useEffect(() => {
		if(currentClass.idCourseClass) {
			replaceHistoryState(`/course/${courseId}/${currentClass.idCourseClass}`);
		}
	},[currentClass]);
	
	return {
		onNavigate
	}
}
