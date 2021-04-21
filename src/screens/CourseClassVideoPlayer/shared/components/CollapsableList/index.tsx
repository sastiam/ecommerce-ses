import React from "react"
import CollapsableProvider from "./context/CollapsableProvider"
import { CollapsableSummary } from "./CollapsableSummary"

const CollapsableList = ({children}) => {
	return (<CollapsableProvider>{children}</CollapsableProvider>)
}

export {
		CollapsableSummary
};
export default CollapsableList;