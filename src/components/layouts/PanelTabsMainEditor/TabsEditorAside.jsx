import React,{ useContext } from "react";
import classNames from "classnames";
import { TabsEditorContext } from "./TabsEditorContext";

const TabsEditorAside = ({ children }) => {
	const { isToggle } = useContext(TabsEditorContext);
	const classNamesAside = classNames("editor-profile__aside", { open: isToggle });
	return <div className={classNamesAside}>{children}</div>;
};

export default TabsEditorAside;
