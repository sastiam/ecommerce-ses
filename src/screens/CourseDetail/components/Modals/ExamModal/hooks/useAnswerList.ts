import { useState } from "react";
import { useDispatch } from "react-redux";
import setUserAnswer from "redux/CourseExam/actions/setUserAnswer";
import useCourseExamRedux from "redux/CourseExam/useCourseExamRedux";

const useAnswerList = () => {
	const dispatch = useDispatch();
	const { userAnswers } = useCourseExamRedux();
	
	const [ answerSelected , setAnswerSelected ] = useState<number>(-1);
	
	const AnswerSelection = (optionId : number, questionNumber : number) => () => {
		setAnswerSelected(() => optionId);

		const user_answers_copy = [...userAnswers];
		user_answers_copy[questionNumber] = {
			optionId : optionId
		}

		dispatch(setUserAnswer(user_answers_copy));
	}

	return {
		answerSelected,
		AnswerSelection
	}
}

export default useAnswerList;