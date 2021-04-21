import { Api } from "../../services";


class CourseClassRepository{

	public getFirstVideoClass = async (idCourse : number) => {
		const request = await Api.get(`class/first&courseId=${idCourse}`);
		const data = request.data;
		return data;
	}

}

export default CourseClassRepository;