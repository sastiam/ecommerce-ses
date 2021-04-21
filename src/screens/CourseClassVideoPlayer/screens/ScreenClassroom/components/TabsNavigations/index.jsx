import React, { useState } from "react";
import Tab from "./Tab";
import { TabsControl, TabsPreview, TabsWrapper } from "./Wrappers"

const TabsNavigations = ({ children }) => {
	const [itemSelected, setItemSelected] = useState(0);
	const itemElements = React.Children.toArray(children).filter(e=>e.type === Tab);
	return (
		<TabsWrapper>
			<TabsControl>
					{itemElements.map((item,index) => {
						return React.cloneElement(item,{
							onClick : () => setItemSelected(index),
							selected : itemSelected === index
						});
					})}
			</TabsControl>
			<TabsPreview>
				{itemElements[itemSelected].props.children}
			</TabsPreview>
		</TabsWrapper>
	);
};

TabsNavigations.Item = Tab;

export default TabsNavigations;
