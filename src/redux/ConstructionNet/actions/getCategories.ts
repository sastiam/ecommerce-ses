import ConstructionNetRepository from "application/requests/ConstructionNetRepository";
import changeCategories from "./changeCategories";

export default () => async dispatch => {
	try {
		const categories = await new ConstructionNetRepository().getCategories();

		dispatch(changeCategories(categories));
	}catch(e){
		console.log(e);
	}
}