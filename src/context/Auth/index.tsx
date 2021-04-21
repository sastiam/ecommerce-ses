import React, { useState , createContext , useEffect, FC, Dispatch, SetStateAction } from "react";
import { IUser } from "../../application/metadata/interfaces/User";
import UserAuthenticationRepository from "application/requests/UserAuthenticationRepository";

import jwt from 'jsonwebtoken';
import { TokenKey } from "application/services/config";
import TokenDecode from "application/services/Token/TokenDecode";
import TokenVerification from "application/services/Token/TokenVerification";
import { navigate } from "@reach/router";

interface IContext {
	userAuth : boolean,
	userAuthInformation : IUser,
	loadingAuth : boolean,
	username : string,
	setUserAuthInformation : Dispatch<SetStateAction<IUser | undefined>>,
	onCloseSession() : void
}

const AuthContext = createContext<Partial<IContext>>({});

const AuthProvider : FC = ({ children }) => {
	//States
	const [ userAuth , setUserAuth ] = useState<boolean>(false);
	const [ userAuthInformation , setUserAuthInformation ] = useState<IUser>();
	const [ loadingAuth , setLoadingAuth ] = useState<boolean>(true);
	const [ username , setUsername ] = useState<string>("");

	/*Actions*/

	// - Token Checking 
	const AuthStateChecking = async () => {
		const saved_token = localStorage.getItem('Token');

		if(!saved_token){
			setUserAuth(false);
			setUserAuthInformation(undefined);
			setLoadingAuth(false);
			return;
		}

		var token = saved_token.split(" ")[1];
		if(!token){
			localStorage.clear();
			window.location.reload();
		}

		const message = new TokenVerification(jwt).__invoke(token, TokenKey);
		if(message === 'Expired'){
			alert('La sesión ha expirado.');
			localStorage.clear();
			
			setUserAuthInformation(undefined);
			setUserAuth(false);
			setLoadingAuth(false);
			return;
		}
			
		const decode = new TokenDecode(jwt).__invoke(token);
		const UARepo = new UserAuthenticationRepository();
		const data = await UARepo.GetUserAuthInformation(decode.email);

		if(!data) return;
		
		setUserAuth(true);
		setUsername(data.username);
		setUserAuthInformation(data);
		setLoadingAuth(false);
		
	}

	// - Cerrar Sesion
	const onCloseSession = ()  : void => {
		localStorage.removeItem('Token');
		sessionStorage.clear();
		setUserAuth(() => false);
		setUserAuthInformation(() => undefined);
		setUsername(() => "");
		navigate('/');
	}

	//Effects
	useEffect(() => {
		AuthStateChecking();
	},[])

	return <AuthContext.Provider value={{ 
		userAuth,
		loadingAuth,
		username,
		userAuthInformation,
		onCloseSession,
		setUserAuthInformation,
	}}>
		{ children }
	</AuthContext.Provider>
};

export {
	AuthContext,
	AuthProvider
}