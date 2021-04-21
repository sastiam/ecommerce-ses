import React, { useContext } from "react";
import classNames from "classnames";
import { TabsEditorContext } from "./TabsEditorContext"

const TabsEditorMain = ({ children }) => {
	const { isToggle } = useContext(TabsEditorContext);
	const classNamesMain = classNames("editor-profile__main", { open: isToggle });
	return <div className={classNamesMain}>{children}</div>;
};

export default TabsEditorMain;
