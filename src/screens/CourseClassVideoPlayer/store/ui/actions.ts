import { createAction, createActions } from "redux-actions";

export const toggleOpenNavigation = createAction("TOGGLE_OPEN_NAVIGATION");
export const setHoverPreviewVideo = createActions("ON_HOVER","OFF_HOVER",{
	prefix : "set-hover-preview-video"
});