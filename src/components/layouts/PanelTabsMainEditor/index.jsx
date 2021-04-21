import React from "react";
import "./index.scss";
import { TabsEditorProvider } from "./TabsEditorContext";
import TabsEditorMain from "./TabsEditorMain";
import TabsEditorAside from "./TabsEditorAside";

const PanelTabsMainEditor = ({ aside, main }) => {
	return (
		<TabsEditorProvider>
			<div className="editor-profile">
				<TabsEditorAside>{aside}</TabsEditorAside>
				<TabsEditorMain>{main}</TabsEditorMain>
			</div>
		</TabsEditorProvider>
	);
};

export default PanelTabsMainEditor;
