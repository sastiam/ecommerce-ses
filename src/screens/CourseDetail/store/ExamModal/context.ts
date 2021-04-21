import { createContext, useContext } from "react";

export type TExamModalType = 'qualifications' | 'exam';

interface IContext {
	ExamModalActive : boolean;
	ExamModalType : TExamModalType;
	ExamModalAnimationActive : boolean;
	ChangeModalActive(state : boolean);
	ChangeModalType(type : TExamModalType);
	AnimationCloseModal(onClose?);
}

export const ExamModalContext = createContext<IContext>({
	ExamModalActive : false,
	ExamModalAnimationActive : false,
	ExamModalType : 'exam',
	ChangeModalActive(){},
	ChangeModalType(){},
	AnimationCloseModal(){}
});

export const useExamModalContext = () => useContext(ExamModalContext);