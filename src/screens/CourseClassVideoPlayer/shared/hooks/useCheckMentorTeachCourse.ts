import { shallowEqual } from "react-redux";
import useAuth from "screens/CourseClassVideoPlayer/hooks/useAuth";
import { useCourseClassroomSelector } from "screens/CourseClassVideoPlayer/store";

export default function useCheckMentorTeachCourse() {
	const { userAuthInformation } = useAuth();
	const idMentor = useCourseClassroomSelector(state => state.progressClasses.currentCourse.idMentor,shallowEqual);
	return idMentor === userAuthInformation?.idUser; 
}
