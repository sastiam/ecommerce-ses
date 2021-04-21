import { createContext, useContext } from "react";

interface IContext {
	TabIndexSelected : number;
	RenderComments : number;
	ChangeTabIndex(index : number);
	ChangeRenderComments(index : number);
}

export const CourseDetailContext = createContext<IContext>({
	TabIndexSelected : 0,
	RenderComments : 4,
	ChangeTabIndex(){},
	ChangeRenderComments(){},
});

export const useCourseDetailContext = () => useContext(CourseDetailContext);