import { ICategory } from "application/metadata/interfaces/Category";
import { TYPES } from "../types";

export default (categories : ICategory[]) => ({
	type : TYPES.SET_CATEGORIES,
	payload : categories
})