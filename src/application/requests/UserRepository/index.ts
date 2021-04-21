import { Api } from "../../services";
import { IRequestObtainsCourse } from "../../metadata/interfaces/User/request";
import { ICoursePercentage } from "../../metadata/interfaces/Course";


class UserRepository {
	
	public GetCourseRecommendation = async (idUser : number) => {
		try {
			const req = await Api.get(`users/courses/recommendations&userId=${idUser}`);
			const { resource } = req.data;
			
			return resource;
		}catch(e){
			console.log(e);
			return [];
		}
	}

	public GetLastCourse = async (idUser : number) => {
		try {
			const req = await Api.get(`users/courses/last&userId=${idUser}`);
			return req.data;
		}catch(e){
			console.log(e);
			return [];
		}
	}

	public IsObtainsCourse = async (data : IRequestObtainsCourse) : Promise<boolean> => {
		const requestData = new URLSearchParams({ 
			idUser : String(data.idUser), 
			idCourse : String(data.idCourse)
		});
		try {
			const request = await Api.post("courses/detail/obtains",requestData);
			const data = request.data;
			return data.response;
		}catch(e){
			console.log(e);
			return false;
		}
	}

	public GetPercentageCourseProgress = async (idUser : number, idCourse : number) : Promise<ICoursePercentage> => {
		try {
			const request = await Api.get(`users/courses/percentage&userId=${idUser}&courseId=${idCourse}`);
			const data = request.data;
			return data;
		}catch(e) {
			console.log(e);
			return {
				courseClassMax : 0,
				classesCompleted : 0
			}
		}
	} 

	public GetPurchases = async (idUser : number ) => {
		try {
			const request = await Api.get(`/users/purchases&userId=${idUser}`);
			const data = request.data;
			return data;
		}catch(e) {
			console.log(e)
		}
	}

	public getInitialCourses = async (idUsername: string) => {
		try{
			const requestCourses = await Api.get(`/users/courses&userId=${idUsername}`);
			const resultCourses = requestCourses.data;
			return resultCourses;
		}catch{}
	}

	public getInitialPanelInformation = async (idUser:number , idTypeUser:number) => {
		try{
			const request = await Api.get(`/users/panel&userId=${idUser}&idTypeUser=${idTypeUser}`);
			const result = request.data;
			return result;
		} catch{}
	}

	public getInitialDataFromUser = async (idUsername : string) => {
		try{
			const requestUser = await Api.get(`/users&userId=${idUsername}`);
			const resultUser =  requestUser.data;
			return resultUser;
		}catch{}
	}

}

export default UserRepository;