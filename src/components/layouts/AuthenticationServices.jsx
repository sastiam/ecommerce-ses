import React, { memo } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

//Styles
import ButtonService from "../common/ButtonService";
import useCustomAuth from "hooks/useCustomAuth";

import { GoogleLogin } from "react-google-login";
import  FacebookLogin  from "react-facebook-login/dist/facebook-login-render-props"
import { googleClientId, facebookClientId } from "application/services/config"


const AuthenticationServices = () => {
	const { googleAuthentication,facebookAuthentication } = useCustomAuth();

	return (
		<>
			<FacebookLogin
				fields="name,email,picture"
				appId={facebookClientId}
				callback={facebookAuthentication}
				render={renderProps => (
					<ButtonService onClick={renderProps.onClick} text="Continuar con Facebook">
						<FaFacebook />
					</ButtonService>
				)}
			/>
			<GoogleLogin
				clientId={googleClientId}
				onSuccess={googleAuthentication}
				render={(renderProps) => (
					<ButtonService
						ghost
						text="Continuar con Google"
						onClick={renderProps.onClick}
					>
						<FcGoogle />
					</ButtonService>
				)}
			/>
		</>
	);
};

export default memo(AuthenticationServices);
