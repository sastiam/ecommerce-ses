import React from 'react';
import * as S from './styles';

import AuthenticationServices from 'components/layouts/AuthenticationServices';
import Input from 'components/common/Input';
import AuthenticationMessage from 'components/common/TopMessageAuth';
import GlobalButton from 'components/common/GlobalButton';
import useRegister from 'hooks/useRegister';
import Loading from 'components/common/Loading';

const RegisterLayout = () => {
	const { changeFullName , changePassword , changeUsername, onSubmit, isLoading } = useRegister();

	return <>
		<AuthenticationMessage
			title="Registrate Hoy"
			subtitle="Empieza tu camino de aprendizaje"
		/>
		<S.RegisterGrid>
			<AuthenticationServices />
			<S.MessageNormal>o registrate con</S.MessageNormal>	
			<S.Form onSubmit={onSubmit} >
				<Input.Authentication text="Nombre Completo" onChange={changeFullName}/>
				<Input.Authentication text="Correo" onChange={changeUsername} type="email" />
				<Input.Authentication text="Contraseña" onChange={changePassword} type="password" />
				<GlobalButton>Registrarme</GlobalButton>
			</S.Form>
		</S.RegisterGrid>
		{ isLoading && <Loading position="absolute" height="100%" center background="rgb(255,255,255,.6)" /> }
	</>
};

export default RegisterLayout;