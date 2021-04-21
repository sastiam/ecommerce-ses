import React, { createContext } from "react";
import useToggle from "../../../hooks/useToggle";

const TabsEditorContext = createContext();
const TabsEditorProvider = ({ children }) => {
	const { isToggle, onToggle } = useToggle(true);
	return (
		<TabsEditorContext.Provider value={{ isToggle, onToggle }}>
			{children}
		</TabsEditorContext.Provider>
	);
};

export { TabsEditorProvider, TabsEditorContext };
