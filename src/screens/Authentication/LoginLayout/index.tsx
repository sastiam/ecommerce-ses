import React, { memo, FC } from "react";
import * as S from "./styles";

//Components
import AuthenticationServices from "components/layouts/AuthenticationServices";
import BottomMessage from "./BottomMessage";
import TopMessageAuth from "components/common/TopMessageAuth";
import Input from "components/common/Input";

import useLogin from "hooks/useLogin";

//UI
import Loading from "components/common/Loading";
import GlobalButton from "components/common/GlobalButton";

const LoginLayout : FC = () => {
	const { isLoading, onSubmit , changeUsername, changePassword } = useLogin();

	return <>
		<TopMessageAuth
			title="Bienvenido de Vuelta"
			subtitle="Inicia sesión y aprende nuevas habilidades hoy."
		/> 
		<S.ContainerGrid>
			<AuthenticationServices />
			<S.MessageNormal>o continua con</S.MessageNormal>	
			<S.Form onSubmit={onSubmit} >
				<Input.Authentication onChange={changeUsername} text="Correo Electrónico" type="email" />
				<Input.Authentication onChange={changePassword} text="Contraseña" type="password" />
				<GlobalButton>Iniciar Sesión</GlobalButton>
			</S.Form>
			<BottomMessage />
		</S.ContainerGrid>
		{ isLoading && <Loading position="absolute" height="100%" center background="rgb(255,255,255,.6)" /> }
	</>
}

export default memo(LoginLayout);