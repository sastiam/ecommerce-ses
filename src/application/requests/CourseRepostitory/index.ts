import { Api } from "../../services";
import { ICourse } from "../../metadata/interfaces/Course";
import { ICourseModuleRequest } from "../../metadata/interfaces/Course/Module";
import { IUserPunctuaction } from "../../metadata/interfaces/User";
import { IRequestCreatePuntuaction } from "../../metadata/interfaces/Course/request";

class CourseRepository {

	public GetAll = async () : Promise<ICourse[]> => {
		try{
			const req = await Api.get("courses");
			const { resource } = req.data;
			return resource;
		}catch(e){
			console.log(e);
			return [];
		}
	}

	public GetAllByCategory = async (category : string) : Promise<ICourse[]> => {
		try {
			const request = await Api.get(`courses/search/category&category=${category}`);
			const data = request.data.resource;
			return data;
		}catch(e){
			console.log(e);
			return [];
		}
	}

	public GetLastAddedByCategory = async (category : string) : Promise<ICourse[]> => {
		try {
			const request = await Api.get(`courses/last/category&categoryMaster=${category}`);
			const { resource } = request.data;
			return resource;
		}catch(e){
			console.log(e);
			return [];
		}
	}

	public GetLastAdded = async () : Promise<ICourse[]> => {
		try{
			const req = await Api.get('courses/last');
			const { resource } = req.data;
			return resource;
		}catch(e){
			console.log(e);
			return [];
		}
	}

	public GetById = async (id : number) : Promise<ICourse | null> => {
		try {
			const request = await Api.get(`courses/detail&courseId=${id}`);			
			const { resource } = request.data;

			return resource;
		}catch(e){
			console.log(e);
			return null;
		}
	}

	public GetTotalStudents = async (id : number) : Promise<number> => {
		try {
			const requestTotalStudents = await Api.get(`courses/students/total&courseId=${id}`);
			const { resource: { totalStudents } } = requestTotalStudents.data;
			return totalStudents;
		}catch(e) {
			console.log(e);
			return 0;
		}
	}
//GetModules
	public GetModulesClassCourse = async (id : number) : Promise<ICourseModuleRequest> => {
		try{
			const { data } = await Api.get(`class&courseId=${id}`);
			const request : ICourseModuleRequest = data;
			return request;
		}catch(e){
			return {
				idCourse:0,
				modulesCourse: [],
				titleCourse: ""
			};
		}
	}

	public GetPuntuaction = async (id : number) : Promise<IUserPunctuaction[]> => {
		try {
			const request = await Api.get(`courses/detail/puntuation&courseId=${id}`);
			const { resource } = request.data;
			return resource;
		}catch(e){
			console.log(e);
			return [];
		}
	}

	public CreatePuntuaction = async (data : IRequestCreatePuntuaction) : Promise<boolean> => {
		try{
			const requestData = new URLSearchParams({
				idUser : String(data.idUser),
				idCourse : String(data.idCourse),
			 	amount : String(data.amount)
			});

			const request = await Api.post("courses/set/punctuation",requestData);
			const { response } = request.data;

			return response;
		}catch(e){
			console.log(e);
			return false;
		}
	}

	public SearchByName = async (name : string) : Promise<ICourse[]> => {
		try{
			const req = await Api.get(`courses/search&title=${name}`);
			const { resource } = req.data;
			return resource;
		}catch(e){
			console.log(e);
			return [];
		}
	}

	public GetCertificate = async (courseId : number, userId : number) => {
		const params = new URLSearchParams({
			courseId : String(courseId),
			userId : String(userId)
		});

		try {
			const request = await Api.post('courses/certificate', params);
			const userCertificateData = request.data;

			return userCertificateData;
		} catch (e) {
			console.log(e);
		}
	}

	public GetIsApproved = async (courseId : number, userId : number) => {
		try {
			const request = await Api.get(`courses/exam/approved/verify&userId=${userId}&courseId=${courseId}`);
			const { approved } = request.data;

			return approved;
		} catch (e) {
			console.log(e);
		}
	}

}

export default CourseRepository;