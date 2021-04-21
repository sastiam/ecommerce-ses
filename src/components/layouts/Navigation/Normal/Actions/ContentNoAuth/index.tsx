import React from "react";
import { LoginOptions } from "./styles";

//UI
import ButtonAuth from "../ButtonAuth";
import { navigate } from "@reach/router";

const ContentNoAuth = () => {
	const onClickLogin = () => navigate("/login")
	const onClickRegister = () => navigate("/register");

	return <LoginOptions data-cy="login-options">
		<ButtonAuth ghost title="Ingresar" onClick={onClickLogin} />
		<ButtonAuth title="Registrate" onClick={onClickRegister} />					
	</LoginOptions>
}

export default ContentNoAuth;