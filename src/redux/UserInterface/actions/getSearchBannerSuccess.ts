import { Types } from "application/metadata/interfaces/Search/types";
import { TYPES } from "../types";

export default (data: Types.IBannersSearch[]) => ({
	type: TYPES.SET_SEARCH_BANNER,
	payload: data,
});
