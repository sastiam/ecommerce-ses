import { createContext, useContext } from "react";

interface CollapsableContextStore {
	itemSelected : string | number,
	setItemSelected : (value : string | number) => void
}
export const CollapsableContext = createContext<CollapsableContextStore | undefined>(undefined);
export const useCollapsable = () => useContext(CollapsableContext) as CollapsableContextStore;