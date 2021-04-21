import { IStore } from "../interface";

const store : IStore = {
	searchMessage : '',
	courses : [],
	isLoading : true,
	coursesFiltered : []
}

export default store;