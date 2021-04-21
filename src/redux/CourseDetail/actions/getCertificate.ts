import CourseRepository from "application/requests/CourseRepostitory";
import setCertificate from "./setCertificate";
import setCertificateLoading from "./setCertificateLoading";

export default (courseId : number, userId : number) => async dispatch => {
	dispatch(setCertificateLoading('loading'));

	try {
		const course = new CourseRepository();
		const data = await course.GetCertificate(courseId, userId);	
	
		dispatch(setCertificate(data));
		dispatch(setCertificateLoading('obtains'));
	} catch (error) {
		console.log(error);
	}
}