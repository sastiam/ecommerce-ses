import { ACTIONS } from "../types";

export default (loading : boolean) => ({
	type : ACTIONS.CHANGE_LOADING,
	payload : loading
});