import { IConstructionNet , ICategory } from "application/metadata/interfaces/Tutorial";

export const ACTIONS = {
	CHANGE_INITIAL_STATE : 'change-initial-state',
	CHANGE_FILTER_DATA : 'change-filter-data',
	CHANGE_CATEGORIES : 'change-categories',
	CLEAR_FILTER_DATA : 'clear-filter-data',
	CHANGE_LOADING : 'change-loading'
}

export interface IConstructionNetStore {
	allPosts : IConstructionNet[],
	postsFiltered : IConstructionNet[],
	categories : ICategory[]
	isLoading : boolean,
	currentCategory : string
}