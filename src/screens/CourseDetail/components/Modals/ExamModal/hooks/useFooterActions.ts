import CourseExamRepository from "application/requests/CourseExamRepository";
import { AuthContext } from "context/Auth";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import setIsApprovedCourse from "redux/CourseDetail/actions/setIsApprovedCourse";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";
import clearUserAnswers from "redux/CourseExam/actions/clearUserAnswers";
import setIsExamStart from "redux/CourseExam/actions/setIsExamStart";
import setOneQualification from "redux/CourseExam/actions/setOneQualification";
import useCourseExamRedux from "redux/CourseExam/useCourseExamRedux";
import { useExamModalContext } from "screens/CourseDetail/store/ExamModal/context";

const useFooterActions = (examPercentage : number) => {
	const [ isSend , setIsSend ] = useState<boolean>(false);

	const { course : { data } , user : { isObtainsCourse } } = useCourseDetailRedux();
	const { userAuthInformation , userAuth } = useContext(AuthContext);
	const { AnimationCloseModal } = useExamModalContext();
	const { userAnswers , isExamStart } = useCourseExamRedux();

	const dispatch = useDispatch();

	const ExamFinish = async () => {
		if(!examPercentage || !userAuth || !isObtainsCourse) return;
		
		setIsSend(() => true);
		const courseId = data.id;
		const userId = userAuthInformation?.idUser!;

		const repository = new CourseExamRepository();
		const new_qualification = await repository.sendUserAnswers(courseId, userId, userAnswers);
		
		dispatch(setOneQualification(new_qualification));
		
		if(new_qualification.qualification >= 10.5) {
			dispatch(setIsApprovedCourse(true));
			AnimationCloseModal(function(){
				alert("Felicidades aprobaste el examen.")
			});
			return;
		}

		dispatch(setIsExamStart(false));
		dispatch(clearUserAnswers());
		setIsSend(() => false);
	}

	const ExamStart = () => {
		const confirmation = window.confirm('El examen empezara de inmediato, ¿Esta usted de acuerdo?');
		if(confirmation){
			dispatch(setIsExamStart(true));
		}
	}

	return {
		onClick : isExamStart ? ExamFinish : ExamStart,
		disabledButton : isExamStart && ((examPercentage < 100) || isSend),
		rightText : isExamStart ? "Finalizar Examen" : "Comenzar Examen",
		leftText : isExamStart ? examPercentage + "% del examen completado." : "Nota : El examen no posee tiempo limite.",
	};
}

export default useFooterActions;