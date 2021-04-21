import { ITutorialCategory } from "../../metadata/interfaces/Category";
import { Api } from "../../services";
import { IConstructionNet } from "../../metadata/interfaces/Tutorial";

class ConstructionNetRepository {
	
	public getPosts = async () : Promise<IConstructionNet[]> => {
		try {
			const req = await Api.get("tutorials");
			return req.data;
		}catch(e){
			console.log(e);
			return [];
		}
	}

	public getCategories = async () : Promise<ITutorialCategory[]> => {
		try {
			const req = await Api.get("tutorials/categories");
			return req.data;
		}catch(e){
			console.log(e);
			return [];
		}
	}

	public getById = async (id : number) : Promise<IConstructionNet | null> => {
		try{
			const request = await Api.get(`tutorials&tutorialId=${id}`);
			const data = request.data;
			return data;
		}catch(e){
			console.log(e);
			return null;
		}
	}
}

export default ConstructionNetRepository;