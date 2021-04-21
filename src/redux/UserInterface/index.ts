import { IUserInterfaceStore, TYPES } from "./types";
import { produce } from "immer"

const initialState : IUserInterfaceStore = {
	mainBanner : {
		bannerVideo : '',
		bannerTitle : '',
		bannerDescription : ''
	},
	searchBanner : [],
	stadistics : {
		totalCourses : 0,
		totalMentors : 0,
		totalStudents : 0
	},
	courses : {
		last : [],
		recomendations : [],
		categories : [],
		loadingState : "loading"
	},
	loadingState : 'loading',
	loadingSearchBannerState : 'loading'
}

const reducer = (state = initialState, action) : IUserInterfaceStore => produce( state , self => {
	switch(action.type){
		
		case TYPES.SET_MAIN_BANNER_DATA:
			self.mainBanner =  action.payload;
			break;

		case TYPES.SET_STADISTICS:
			self.stadistics = action.payload;
			break;

		case TYPES.SET_LOADING_STATE:
			self.loadingState = action.payload;
			break;

		case TYPES.SET_LAST_COURSES:
			self.courses.last = action.payload.courses;
			self.courses.loadingState = action.payload.loadingState;
			break;

		case TYPES.SET_RECOMENDATIONS:
			self.courses.recomendations = action.payload;
			break;

		case TYPES.SET_CATEGORIES:
			self.courses.categories = action.payload;
			break;

		case TYPES.SET_LOADING_SEARCH_BANNER:	
			self.loadingSearchBannerState = action.payload;
			break;
		case TYPES.SET_SEARCH_BANNER:
			self.searchBanner = action.payload;
			break;
	}
})

export default reducer;