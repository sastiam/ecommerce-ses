import { ACTIONS } from "../types";

export default (isFavorite : boolean) => ({
	type : ACTIONS.SET_IS_FAVORITE,
	payload : isFavorite
});