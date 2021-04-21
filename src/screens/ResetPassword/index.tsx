import React from "react";
import * as S from "./styles";
import Navigation from "components/layouts/Navigation";
import Input from "components/common/Input";
import GlobalButton from "components/common/GlobalButton";
import TopMessageAuth from "components/common/TopMessageAuth";
import useResetPassword from "./hooks/useResetPassword";
import Loading from 'components/common/Loading';

const ResetPassword = () => {
	const { onConfirmPasswordValue,onPasswordValue, onSubmit,isLoading  } = useResetPassword();

	return (
		<main>
			<Navigation.Simple />
			<TopMessageAuth
				title="Restable tu contraseña"
				subtitle="Ingresa tu nueva contraseña para reestablecer el inicio de sesión"
			/>
			<S.Content>
				<S.FormContainer onSubmit={onSubmit}>
				<Input.Authentication onChange={onPasswordValue} text="Ingresar nueva contraseña" type="password" />
				<Input.Authentication onChange={onConfirmPasswordValue} text="Confirmar contraseña" type="password" />
					<GlobalButton>Reestablecer contraseña</GlobalButton>
				</S.FormContainer>
			</S.Content>
			{ isLoading && <Loading position="absolute" height="100%" center background="rgb(255,255,255,.6)" /> }
		</main>
	);
};

export default ResetPassword;
