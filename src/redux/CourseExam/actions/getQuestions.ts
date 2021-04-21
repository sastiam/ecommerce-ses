import CourseExamRepository from "application/requests/CourseExamRepository";
import setLoadingQuestions from "./setLoadingQuestions";
import setQuestions from "./setQuestions";

export default (courseId : number) => async dispatch => {
	try {
		const questions = await new CourseExamRepository().getQuestions(courseId);

		dispatch(setQuestions(questions));
		dispatch(setLoadingQuestions('complete'));
	} catch (e) {
		console.log(e);
		dispatch(setLoadingQuestions('error'));
	}
}