import { IConstructionNet } from "application/metadata/interfaces/Tutorial"
import { ACTIONS } from "redux/ConstructionNet/types"

export default (tutorial : IConstructionNet[]) => ({
	type : ACTIONS.CHANGE_INITIAL_STATE,
	payload : tutorial
})