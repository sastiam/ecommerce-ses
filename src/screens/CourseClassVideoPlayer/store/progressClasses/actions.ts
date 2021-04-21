import { createAction, createActions } from "redux-actions";

export const selectCurrentCourseclass = createAction("SELECT_CURRENT_COURSE_CLASS");

export const getCourseClasses = createActions("LOADING", "SUCCESS","EMPTY", {
	prefix: "classroom/classroom-progress",
});

export const checkObtainCourse =  createActions("LOADING","SUCCESS",{
	prefix: "classroom/classroom-check-access",
});

export const markAsCompletedClass = createAction("MARK_AS_COMPLETED_CLAS");
export const resetClassroomData = createAction("RESET_CLASSROOM_DATA");
export const moveToNextClassModule = createAction("MOVE_TO_NEXT_CLASS_MODULE");