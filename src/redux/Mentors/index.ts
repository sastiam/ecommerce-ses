import { ACTIONS, IMentorsStore } from "./types";
import { produce } from "immer"

const initialState : IMentorsStore = {
	mentors:[],
	loading:true
}

const reducer = (state = initialState, action ) : IMentorsStore => produce(state, self => {
	switch(action.type) {

	 case ACTIONS.GET_MENTORS_LOADING : 
		self.loading = true;
		break;

	 case ACTIONS.GET_MENTORS_SUCCESS :
		self.loading = false;
		self.mentors = action.payload;	 
		break;
		
	}
});

export default reducer
