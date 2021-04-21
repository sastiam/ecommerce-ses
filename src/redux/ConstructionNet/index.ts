import { IConstructionNetStore , ACTIONS } from "./types";
import produce from "immer";

const initialState : IConstructionNetStore = {
	allPosts : [],
	postsFiltered : [],
	categories : [],
	isLoading : true,
	currentCategory : 'Todos'
}

const reducer = (state = initialState , action) : IConstructionNetStore => produce(state, self => {
	switch(action.type){
		case ACTIONS.CHANGE_INITIAL_STATE:
			self.isLoading = false;
			self.allPosts = action.payload;
			self.postsFiltered = action.payload;
			break;

		case ACTIONS.CHANGE_FILTER_DATA:
			self.currentCategory = action.payload.categoryName;
			self.postsFiltered = action.payload.posts;
			break;

		case ACTIONS.CLEAR_FILTER_DATA:
			self.postsFiltered = self.allPosts;
			break;

		case ACTIONS.CHANGE_LOADING:
			self.isLoading = action.payload;
			break;

		case ACTIONS.CHANGE_CATEGORIES:
			self.categories = action.payload;
			break;

	}
});

export default reducer;