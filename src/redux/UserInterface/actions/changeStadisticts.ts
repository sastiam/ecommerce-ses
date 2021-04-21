import { IStadistics, TYPES } from "../types";

export default (stadistics : IStadistics) => ({
	type : TYPES.SET_STADISTICS,
	payload : stadistics
});