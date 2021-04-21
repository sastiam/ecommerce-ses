import React, { useMemo } from 'react';
import classnames from 'classnames';
import * as S from './styles';

import Input from 'components/common/Input';
import Navigation from 'components/layouts/Navigation';
import TopMessageAuth from 'components/common/TopMessageAuth';

import useRecoveryPassword from 'hooks/useRecoveryPassword';
import MainLayout from 'components/layouts/MainLayout';
import { navigate } from '@reach/router';

const PasswordRecovery = () => {
	const { isLoading, onSubmit , changeEmail , isOk, email } = useRecoveryPassword();

	const checkIfNotIsGmail = !(/@gmail.com/.test(email));

	const NavigateToLogin = () => navigate("/login");

	return <MainLayout titlePage="Recuperar Contraseña" >
		<Navigation.Simple />
		<TopMessageAuth
			title={!isOk ? "Restable tu contraseña" : "Correo de Recuperación"}
			subtitle={!isOk ?
				"Dejanos tu correo de registro, ¡nos comunicaremos contigo!" :
				"El correo de recuperación ha sido enviado exitosamente"
			}
		/>
		<S.Content>
			{
				isOk ?
					(
						<div>
							{checkIfNotIsGmail && (
								<S.MessageOk>Se envió un mensaje a tu correo, si no llegó puedes fijarse en los mensajes de Spam</S.MessageOk>
							)}
							<S.Button onClick={NavigateToLogin}>Regresar al Login</S.Button>
						</div>
					) :
					<S.FormContainer onSubmit={onSubmit}>
						<Input.Authentication onChange={changeEmail} text="Correo Electrónico" type="email" />
						<S.Button
							disabled={isLoading}
							className={classnames({ loading : isLoading })}
						>
							{
								isLoading ?
									<S.ButtonSpinner /> :
									"Recuperar Contraseña"
							}
						</S.Button>
					</S.FormContainer>
			}
		</S.Content>
	</MainLayout>
};

export default PasswordRecovery;