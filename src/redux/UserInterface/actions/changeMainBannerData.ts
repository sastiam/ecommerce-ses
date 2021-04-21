import { IUserInterface } from "application/metadata/interfaces/UI";
import { TYPES } from "../types";

export default (banner : IUserInterface) => ({
	type : TYPES.SET_MAIN_BANNER_DATA,
	payload : banner
});