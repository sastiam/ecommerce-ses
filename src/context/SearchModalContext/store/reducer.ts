import { IAction, IStore } from "../interface"

const ACTIONS_EVENTS = {
	UPDATE_SEARCH_MESSAGE : 'update-search-message',
	UPDATE_COURSES_FILTER : 'update-courses-filter',
	UPDATE_COURSES : 'update-courses'
}

const reducer = (state : IStore , action : IAction) : IStore => {
	switch(action.type){
		case ACTIONS_EVENTS.UPDATE_COURSES:
			return {
				...state,
				courses : action.payload,
				coursesFiltered : action.payload,
				isLoading : false
			}

		case ACTIONS_EVENTS.UPDATE_SEARCH_MESSAGE:
			return {
				...state,
				searchMessage : action.payload
			}

		case ACTIONS_EVENTS.UPDATE_COURSES_FILTER:
			return {
				...state,
				coursesFiltered : action.payload
			}
			
		default:
			return state;
	}
}

export {
	reducer,
	ACTIONS_EVENTS
}