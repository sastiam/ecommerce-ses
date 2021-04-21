import React , { FC, useState } from "react"
import { ErrorMessagesContext , IErrorMessage } from "./context";

export const ErrorMessageProvider : FC = ({ children }) => {
	const [ queue , setQueue ] = useState<IErrorMessage[]>([]);

	const append = (message : string) => {
		var errorMessage : IErrorMessage = {
			id : queue.length,
			message,
		}

		setQueue(list => [...list, errorMessage])
	}

	const remove = (id : number) => setQueue(list => list.filter((v,i) => v.id !== id));

	return <ErrorMessagesContext.Provider value={{
		queue,
		append,
		remove
	}}>
		{children}
	</ErrorMessagesContext.Provider>
}