export namespace Types {
	export interface ISearchCourseProvider {
		children: React.ReactChild | React.ReactChildren;
	}

	export interface IContextProvider {
		wantedCourses: ListWantedCourses;
		loadingSearch: Loading;
		currentCourseCategory: CurrentCategory;
		filterWantedCourses: FilterWantedCourses;
		bannersSearch: IBannersSearch;
		updateFilterCourses: (params: string) => void;
	}

	export interface ISearchWantedCourses {
		id: string;
		title: string;
		videoPreview: string;
		imagePreview: string;
		price: number;
		category: string;
		categoryMaster: string;
		free: boolean;
		idCourseCategory: number;
		idCourseSubcategory: number;
		idMentor: number;
		mentor: string;
		offert: number;
		idLevel: number;
		punctuation: number;
	}

	export type ListWantedCourses = ISearchWantedCourses[];

	export type CurrentCategory = string;
	export type Loading = boolean;
	export type FilterWantedCourses = string;

	export interface StoreSearch {
		loadingSearch: Types.Loading;
		wantedCourses: Types.ListWantedCourses;
		filterWantedCourses: Types.FilterWantedCourses;
		currentCourseCategory: string;
		checkingPageFilter: boolean;
	}

	export interface ActionReducer {
		type: string;
		payload?: any;
	}

	export interface IBannersSearch {
		readonly id?: number;
		readonly bannerTitle?: string;
		readonly bannerDescription?: string;
		readonly bannerImage?: string;
	}
}
