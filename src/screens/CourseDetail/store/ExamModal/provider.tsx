import React , { FC, useEffect, useState } from "react";
import { ExamModalContext , TExamModalType } from './context';

const ExamModalProvider : FC = ({ children }) => {
	const [ ExamModalType , setExamModalType ] = useState<TExamModalType>('exam');
	const [ ExamModalActive , setExamModalActive ] = useState<boolean>(false);
	const [ ExamModalAnimationActive , setExamModalAnimationActive ] = useState<boolean>(true);

	const ChangeModalActive = (state : boolean) => setExamModalActive(() => state);
	const ChangeModalType = (type : TExamModalType) => setExamModalType(() => type);
	const AnimationCloseModal = (onClose? : Function) => {
		setExamModalAnimationActive(() => false);
		setTimeout(() => {
			ChangeModalActive(false);
			setExamModalAnimationActive(() => true);
			onClose && onClose();
		}, 300);
	}

	useEffect(() => {
		if(ExamModalActive) {
			document.body.style.overflow = "hidden";
			return;
		}

		document.body.style.overflow = "auto";
	},[ExamModalActive]);

	return <ExamModalContext.Provider value={{
		ExamModalType,
		ExamModalActive,
		ExamModalAnimationActive,
		ChangeModalActive,
		ChangeModalType,
		AnimationCloseModal
	}}>
		{children}
	</ExamModalContext.Provider>
}

export default ExamModalProvider;