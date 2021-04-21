import useCourseExamRedux from 'redux/CourseExam/useCourseExamRedux';
import { useExamModalContext } from 'screens/CourseDetail/store/ExamModal/context';

const useModalTemplateActions = () => {
	const { isExamStart } = useCourseExamRedux();
	const { ExamModalType , ExamModalAnimationActive , AnimationCloseModal } = useExamModalContext();

	const onClose = () => {
		if(ExamModalType === "exam" && isExamStart) {
			const confirmation = window.confirm("Si decides cerrar esta ventana, el examen quedara inconcluso. ¿Esta seguro de esto?");
			if(!confirmation) return;
		}

		AnimationCloseModal();
	}

	return {
		onClose,
		ExamModalAnimationActive
	}
}

export default useModalTemplateActions;