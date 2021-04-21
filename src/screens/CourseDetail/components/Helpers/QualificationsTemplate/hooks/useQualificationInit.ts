import { AuthContext } from "context/Auth";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";
import getQualifications from "redux/CourseExam/actions/getQualifications";
import useCourseExamRedux from "redux/CourseExam/useCourseExamRedux";

const useQualificationsInit = () => {
	const { userAuthInformation } = useContext(AuthContext);
	const { course : { data : { id } } , user : { isObtainsCourse } } = useCourseDetailRedux();
	const { qualifications } = useCourseExamRedux();

	const dispatch = useDispatch();

	useEffect(() => {
		if(isObtainsCourse && qualifications.loadingState !== "complete"){
			dispatch(getQualifications(userAuthInformation?.idUser!, id));
		}
	}, []);
	
	return {
		qualifications : qualifications.data,
		isLoading : qualifications.loadingState !== "complete"
	}
}

export default useQualificationsInit;