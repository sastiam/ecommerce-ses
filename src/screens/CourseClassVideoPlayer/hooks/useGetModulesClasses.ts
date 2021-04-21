import { useCourseClassroomSelector } from '../store'
import { shallowEqual } from "react-redux"

export default function useGetModulesClasses() {
	const data = useCourseClassroomSelector(({progressClasses}) => ({
		modulesCourse  : progressClasses.modulesCourse,
		loadingModulesCourse : progressClasses.loadingModulesCourse
	}),shallowEqual);
	return data;
}
