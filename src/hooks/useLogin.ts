import { FormEvent, useState } from "react";
import jwt from 'jsonwebtoken';

import { TokenKey } from "application/services/config";
import TokenGenerate from "application/services/Token/TokenGenerate";
import UserAuthenticationRepository from "application/requests/UserAuthenticationRepository";

import {useQuerySearch} from "hooks/useQuery";
import { navigate } from '@reach/router';


export default () => {
	const [ isLoading , setLoading ] = useState<boolean>(false);
	const [ username , setUsername ] = useState<string>("");
	const [ password , setPassword ] = useState<string>("");

	const changeUsername = (value : string) => setUsername(() => value);
	const changePassword = (value : string) => setPassword(() => value);

	const urlRedirect = useQuerySearch("redir");
	// console.log(useQuerySearch("redir"));

	const onSubmit = async (ev : FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		const formatedEmail = username.trim(),
			formatedPassword = password.trim();

		let payload = {
			email : formatedEmail,
			password : formatedPassword
		};
		
		setLoading(() => true);

		const repository = new UserAuthenticationRepository()
		const isRegister = await repository.IsUserRegister(formatedEmail);
		if(!isRegister){
			alert("Error, el usuario no existe.");
			setLoading(() => false);
			return;
		}

		const authValidate = await repository.RequestChekAuth(payload);
		if(!authValidate){
			alert("Error , Contraseña erronea.");
			setLoading(() => false);
			return;
		}

		const token = new TokenGenerate(jwt, TokenKey).__invoke({ email : formatedEmail });
		localStorage.setItem('Token', token);
		
		
		if(urlRedirect){
			navigate(urlRedirect);
			window.location.reload();
			// window.location.href = urlRedirect; 
		}
		window.location.reload();
	}

	return {
		onSubmit,
		isLoading,
		changePassword,
		changeUsername
	}
}