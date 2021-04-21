import { shallowEqual } from "react-redux";
import { useCourseClassroomSelector } from "../store";

export default function useCurrentModuleClass() {
	const [ currentClass , currentModule ] = useCourseClassroomSelector(({ progressClasses }) => [
		progressClasses.currentClass,
		progressClasses.currentModule,
	],shallowEqual);
	return {
		currentClass,
		currentModule
	};
}
