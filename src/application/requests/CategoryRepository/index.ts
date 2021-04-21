import { ICategory } from "application/metadata/interfaces/Category";
import { Api } from "../../services";
import { CategoryAllDefaultContent } from './default';

class CategoryRepository {

	public getCategories = async () : Promise<ICategory[]> => {
		try {
			const { data : { resource }} = await Api.get("courses/categories");
			return resource;
		}catch(e){
			console.log(e);
			return CategoryAllDefaultContent;
		}
	}
	
}

export default CategoryRepository;