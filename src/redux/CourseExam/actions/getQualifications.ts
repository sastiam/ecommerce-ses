import CourseExamRepository from "application/requests/CourseExamRepository";
import setLoadingQualifications from "./setLoadingQualifications";
import setQualification from "./setQualification";

export default (userId : number, courseId : number) => async dispatch => {
	try {
		const repository = new CourseExamRepository();
		const qualifications = await repository.getQualifications(userId,courseId);
		
		dispatch(setQualification(qualifications));
		dispatch(setLoadingQualifications("complete"));
	}catch(e){
		console.log(e);
		dispatch(setLoadingQualifications("error"));
	}
}