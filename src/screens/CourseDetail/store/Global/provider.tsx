import React , { FC, useState } from "react";
import { CourseDetailContext } from './context';

const CourseDetailProvider : FC = ({ children }) => {
	const [ TabIndexSelected , setTabIndex ] = useState<number>(0);
	const [ RenderComments , setRenderComments ] = useState<number>(4);

	const ChangeRenderComments = () => setRenderComments(index => index + 4);
	const ChangeTabIndex = (index : number) => () => setTabIndex(() => index > 2 ? 2 : index);

	return <CourseDetailContext.Provider value={{
		RenderComments,
		ChangeRenderComments,
		TabIndexSelected,
		ChangeTabIndex
	}}>
		{children}
	</CourseDetailContext.Provider>
}

export default CourseDetailProvider;