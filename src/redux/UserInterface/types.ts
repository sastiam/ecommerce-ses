import { ICategory } from "application/metadata/interfaces/Category";
import { Types as TypesSearch } from "application/metadata/interfaces/Search/types";
import { IUserInterface } from "application/metadata/interfaces/UI";
import { TLoadingState } from 'application/metadata/types'

export const TYPES = {
	SET_MAIN_BANNER_DATA : 'set-main-banner-data',
	SET_STADISTICS : 'set-main-stadistics',
	SET_LAST_COURSES : 'set-last-courses',
	SET_LOADING_STATE : 'set-loading-state',
	SET_RECOMENDATIONS : 'set-recomendations',
	SET_CATEGORIES : 'set-categories',
	SET_SEARCH_BANNER : 'set-search-banner',
	SET_LOADING_SEARCH_BANNER : 'set-loading-search-banner'
}

export interface IStadistics {
	totalStudents : number;
	totalMentors : number;
	totalCourses : number;
}

export interface IUserInterfaceStore {
	mainBanner : IUserInterface;
	searchBanner : TypesSearch.IBannersSearch[];
	stadistics : IStadistics;
	courses : {
		last : any[];
		recomendations : any[];
		categories : ICategory[];
		loadingState : TLoadingState;
	},
	loadingState : TLoadingState;
	loadingSearchBannerState : TLoadingState;
}