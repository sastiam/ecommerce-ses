import { Types } from "application/metadata/interfaces/Search/types";
import { Api } from "application/services";

export default class SearchRepository {
	
	public getAllCourses = async (): Promise<Types.ListWantedCourses> => {
		const { data } = await Api.get("courses");
		return data.resource;
	};

	public getFreeCourses = async (): Promise<Types.ListWantedCourses> => {
		const { data } = await Api.get("courses/free");
		return data.resource;
	};

	public getCoursesFiltered = async (category : string) : Promise<Types.ListWantedCourses> => {
		try{
			const { data } = await Api.get(`courses/categories&categoryName=${category}`);
			return data.resource;
		}
		catch(e) {
			return [];
		}
	}

}
