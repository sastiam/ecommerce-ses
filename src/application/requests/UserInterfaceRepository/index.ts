import { Api } from "../../services";
import { IUserInterface } from "../../metadata/interfaces/UI";
import { UIDefaultContent } from "./default";


class UserInterfaceRepository {
	
	public getInformation = async () : Promise<IUserInterface> => {
		try{
			const req = await Api.get("ui/all");
			return req.data;
		}catch(e){
			console.log(e);
			return UIDefaultContent;
		}
	}

	public getStadistics = async () => {
		try {
			const req = await Api.get("ui/totals");
			return req.data;
		}catch(e) {
			console.log(e);
			return [];
		}
	}

	public getSearchBanners = async () => {
		try {
			const req = await Api.get("/ui/search/banners");
			return req.data;
		}
		catch(e) {
			console.log(e);
			return [];
		}
	}

}

export default UserInterfaceRepository;