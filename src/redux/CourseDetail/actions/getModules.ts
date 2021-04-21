import CourseRepository from "application/requests/CourseRepostitory";
import setModules from "./setModules";

export default (id : number) => async dispatch => {
	try {
		const courseModule = new CourseRepository();
		const data = await courseModule.GetModulesClassCourse(id);
		dispatch(setModules(data.modulesCourse));
	} catch (e) {
		console.log(e);
	}
}