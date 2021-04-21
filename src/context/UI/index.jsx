import React , { createContext, useState } from "react";

const UIContext = createContext();
const UIProvider = ({ children }) => {
	//States
	const [ modalAuthType , setTypeLoginRegisterModal ] = useState("login"); // login | register

	const updateModalAuthType = value => setTypeLoginRegisterModal(value);

	return <UIContext.Provider value={{ 
		modalAuthType,
		updateModalAuthType 
	}}>
		{children}
	</UIContext.Provider>
}

export {
	UIProvider,
	UIContext
}