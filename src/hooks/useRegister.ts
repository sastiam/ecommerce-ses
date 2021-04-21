import { FormEvent, useState } from "react";
import jwt from 'jsonwebtoken';

import { TokenKey } from "application/services/config";
import TokenGenerate from "application/services/Token/TokenGenerate";
import UserAuthenticationRepository from "application/requests/UserAuthenticationRepository";

type TPayload = {
	email : string;
	password : string;
	fullName : string;
}

export default () => {
	const [ username , setUsername ] = useState<string>("");
	const [ password , setPassword ] = useState<string>("");
	const [ fullName , setFullName ] = useState<string>("");
	const [ isLoading , setLoading ] = useState<boolean>(false);

	const changeUsername = (value : string) => setUsername(() => value);
	const changePassword = (value : string) => setPassword(() => value);
	const changeFullName = (value : string) => setFullName(() => value);

	const _createNewUser = async (payload : TPayload) : Promise<boolean> => {
		const { email } = payload;

		const UARepo = new UserAuthenticationRepository();
		const isRegister = await UARepo.IsUserRegister(email);
		if(isRegister){
			alert("El usuario ingresado ya se encuentra registrado");
			return false;
		}
		
		return UARepo.CreateUser(payload);
	}

	const onSubmit = async (ev : FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		const emailF = username.trim(),
			passwordF = password.trim(),
			fullNameF = fullName.trim();

		let payload = {
			email : emailF,
			password : passwordF,
			fullName : fullNameF
		};

		if(!emailF.includes("@") || (!emailF && !passwordF) ){
			alert("Ingrese datos validos porfavor.");
			return;
		}

		setLoading(() => true);

		try{
			const isRegister = await _createNewUser(payload);
			if(isRegister){
				const token = new TokenGenerate(jwt, TokenKey).__invoke({ email : emailF });
				localStorage.setItem('Token', token);
				window.location.reload();
			}
		}catch(error){
			console.log(error);
		} finally {
			setLoading(() => false);
		}
	}

	return {
		onSubmit,
		isLoading,
		changeFullName,
		changePassword,
		changeUsername
	}
}