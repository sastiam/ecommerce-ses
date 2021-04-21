import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";
import clearUserAnswers from "redux/CourseExam/actions/clearUserAnswers";
import getQuestions from "redux/CourseExam/actions/getQuestions";
import setIsExamStart from "redux/CourseExam/actions/setIsExamStart";
import useCourseExamRedux from "redux/CourseExam/useCourseExamRedux";

const useExamInit = () => {
	const { course : { data } } = useCourseDetailRedux();
	const { questions , userAnswers , isExamStart } = useCourseExamRedux();

	const dispatch = useDispatch();
	const GetPercentage = () => {
		const user_answers_selected = userAnswers.filter(v => v);
		const percentage = (user_answers_selected.length * 100) / questions.data.length;

		return Math.round(percentage);
	}

	useEffect(() => {
		if(questions.loadingState !== 'complete'){
			dispatch(getQuestions(data.id));
		}
		
		return () => {
			dispatch(clearUserAnswers());
			dispatch(setIsExamStart(false));
		}
	},[]);

	return {
		course : data,
		questions : questions.data,
		isExamStart,
		isLoadingQuestions : questions.loadingState === 'loading',
		examPercentage : GetPercentage(),
	}
}

export default useExamInit;