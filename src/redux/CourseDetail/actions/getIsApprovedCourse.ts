import CourseRepository from "application/requests/CourseRepostitory";
import setIsApprovedCourse from "./setIsApprovedCourse";

export default (courseId : number, userId : number) => async dispatch => {
	try {
		const repository = new CourseRepository();
		const isApproved = await repository.GetIsApproved(courseId, userId);
	
		dispatch(setIsApprovedCourse(isApproved));
	} catch (e) {
		console.log(e);
	}
}