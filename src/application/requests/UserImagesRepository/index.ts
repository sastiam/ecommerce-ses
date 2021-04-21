import { Api } from "application/services";

export default class UserImageRepository {
	
	public updateImageBackdrop = async (idUser: string, image: any) => {
		try {
			const data = new FormData();
			data.append("image", image);
			data.append("idUser", idUser);
			const request = await Api.post("/users/image/background", data);
			const result = request.data;
			return result;
		} catch {
			console.log("error change img bg");
		}
	};

	public updateImageProfile = async (idUser : string,image : any) => {
		try {
			const data = new FormData();
			data.append("image", image);
			data.append("idUser", idUser);
			const request = await Api.post("/users/image/profile", data);
			const result =  request.data;
			return result;
		}catch{
			console.log("error change img profile");
		}
	};

}
