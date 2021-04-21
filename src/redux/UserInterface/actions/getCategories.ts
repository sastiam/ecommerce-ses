import CategoryRepository from "application/requests/CategoryRepository";
import changeCategories from "./changeCategories";

export default () => async dispatch => {
	try {
		const categories = await new CategoryRepository().getCategories();
		dispatch(changeCategories(categories));
	}catch(e){
		console.log(e);
	}
}