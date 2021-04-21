import React, { useEffect, useMemo } from "react"
import { useCollapsable } from "./context/CollapsableContext"

type CollapsableSummaryProps = {
	collapsableId : string | number;
	selected ?: boolean;
	children : (props : {
		collapsableId : string | number,
		open: boolean,
		onSelect : () => void,
	}) => React.ReactElement;
	onChange ?: (state : boolean) => void
}

export const CollapsableSummary = ({children,collapsableId,selected,onChange} : CollapsableSummaryProps) => {
	const { itemSelected, setItemSelected } = useCollapsable();
	const isOpen = useMemo(()=>itemSelected === collapsableId,[itemSelected,collapsableId]);

	useEffect(() => {
		selected &&	setItemSelected(collapsableId);
	},[selected,setItemSelected,collapsableId]);

	useEffect(() => {
		onChange && onChange(isOpen);
	// eslint-disable-next-line
	},[isOpen]);

	return children({
		collapsableId,
		open: isOpen,
		onSelect : () => {  
			setItemSelected(isOpen ? "" : collapsableId); 
		}
	});
}

export default CollapsableSummary;