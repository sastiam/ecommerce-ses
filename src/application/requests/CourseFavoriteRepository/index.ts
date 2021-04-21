import { Api } from "../../services";


class CourseFavoriteRepository {

	public IsMyFavoriteCourse = async (idUser : number , idCourse : number) : Promise<boolean> => {
		try {
			const request = await Api.get(`users/courses/favorite/check&userId=${idUser}&courseId=${idCourse}`);
			const { resource } = request.data;
			
			return resource;
		}catch(e){
			console.log(e);
			return false;
		}			
	}

	public ChangeFavoriteCourse = async (idUser : number , idCourse : number) : Promise<boolean> => {
		try {
			const request = await Api.post(`users/courses/favorite/update&userId=${idUser}&courseId=${idCourse}`);
			const { resource } = request.data;

			return resource;
		}catch(e) {
			console.log(e);
			return false;
		}
	}

}

export default CourseFavoriteRepository;