import React, { useState } from 'react'
import { CollapsableContext } from './CollapsableContext'

const CollapsableProvider = ({children}:{children : React.ReactNode}) => {
	const [itemSelected, setItemSelected] = useState<string | number>("");
	
	return (
		<CollapsableContext.Provider value={{
			itemSelected,
			setItemSelected
		}}>
				{children}
		</CollapsableContext.Provider>
	)
}

export default CollapsableProvider
