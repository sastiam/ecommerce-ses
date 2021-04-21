import { handleActions } from "redux-actions";
import { setHoverPreviewVideo, toggleOpenNavigation } from "./actions";
import { produce } from "immer";
import { UIState } from "screens/CourseClassVideoPlayer/@types/types";

const initialState : UIState.State = {
	sidebar: {
		open: true,
		width : "var(--width-sidebar)",
	},
	previewVideo: {
		hover: false,
	},
};

const ui = handleActions(
	{
		[toggleOpenNavigation.toString()]: produce((state : UIState.State) => {
			state.sidebar.open = !state.sidebar.open;
			state.sidebar.width = !state.sidebar.open ? "0px" : "var(--width-sidebar)";
		}),

		[setHoverPreviewVideo.onHover.toString()]: produce((state :UIState.State) => {
			state.previewVideo.hover = true;
		}),
		
		[setHoverPreviewVideo.offHover.toString()]: produce((state : UIState.State) => {
			state.previewVideo.hover = false;
		}),
	},
	initialState
);
export default ui;
