import { createContext, useContext } from "react";

export interface IErrorMessage {
	id : number;
	message : string;
}

export interface IContext {
	queue : IErrorMessage[];
	append(message : string) : void;
	remove(id : number) : void;
}

export const ErrorMessagesContext = createContext<IContext>({
	queue : [],
	append(){},
	remove(){}
});

export const useErrorMessagesContext = () => useContext(ErrorMessagesContext);