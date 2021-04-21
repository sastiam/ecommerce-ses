import UserAccountRepository from "application/requests/UserAccountRepository";
import { useErrorMessagesContext } from "context/ErrorMessage/context";
import { FormEvent, useState } from "react";

export default () => {
	const { append } = useErrorMessagesContext();

	const [ isLoading , setLoading ] = useState<boolean>(false);
	const [ isOk , setIsOk ] = useState<boolean>(false);
	const [ email , setEmail ] = useState<string>("");
	
	const changeEmail = (value : string) => setEmail(() => value);

	const onSubmit = async (ev : FormEvent<HTMLFormElement>) => {
		ev.preventDefault();

		const emailF = email.trim();
		if(!emailF.includes("@")){
			alert("Ingrese un email.");
			return;
		}

		setLoading(() => true);

		const userAccount = new UserAccountRepository();
		const isSend = await userAccount.sendEmailPasswordRecovery(email);
		if(!isSend){
			append("No se pudo enviar el correo.");
		}else {
			alert("Se envió un mensaje a tu correo para restablecer tu contraseña");
		}

		setIsOk(() => isSend);
		setLoading(() => false);
	}

	return {
		isLoading,
		isOk,
		changeEmail,
		onSubmit,
		email,
	}
}