import { Api } from "application/services";
import { IQualification, IUserAnswer } from "redux/CourseExam/types";

class CourseExamRepository {

	public async getQuestions(courseId : number) {
		try {
			const request = await Api.get("courses/questions&courseId=" + courseId);
			const data = request.data;

			return data.resource || [];
		} catch (e) {
			console.log(e);
			return [];
		}
	}

	public async getQualifications(userId : number, courseId : number) {
		try {
			const request = await Api.get(`courses/exam/get/qualifications&userId=${userId}&courseId=${courseId}`);
			const data = request.data;

			console.log(data);
			

			return data.resource || [];
		} catch (e) {
			console.log(e);
		}
	}

	public async sendUserAnswers(courseId : number, userId : number, userAnswers : IUserAnswer[]){
		const params = new URLSearchParams({
			courseId : String(courseId),
			userId : String(userId),
			userAnswers : JSON.stringify(userAnswers)
		});

		try{
			const request = await Api.post('courses/exam/set/qualification', params);
			const data = request.data;
			return data;
		}catch(e){
			console.log(e);
		}
	}

}

export default CourseExamRepository;