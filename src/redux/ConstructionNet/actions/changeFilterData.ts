import { IConstructionNet } from "application/metadata/interfaces/Tutorial";
import { ACTIONS } from "../types";

export default (posts : IConstructionNet[], categoryName : string) => ({
	type : ACTIONS.CHANGE_FILTER_DATA,
	payload : {
		posts,
		categoryName
	}
})