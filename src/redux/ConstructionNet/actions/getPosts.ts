import ConstructionNetRepository from "application/requests/ConstructionNetRepository";
import changeInitialState from "./changeInitialState";
import changeLoading from "./changeLoading";

export default () => async dispatch => {
	try {
		const constructionNet = new ConstructionNetRepository();
		const posts = await constructionNet.getPosts();

		if(posts.length) {
			dispatch(changeInitialState(posts));
		}

		dispatch(changeLoading(false));
	}catch(e){
		console.log(e);
	}
}