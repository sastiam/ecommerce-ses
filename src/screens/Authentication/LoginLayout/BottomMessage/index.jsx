import React, { memo } from "react";

import GlobalDiv from "components/common/GlobalDiv";
import { MessageNormal , MessageLink } from "../styles";
import { navigate } from "@reach/router";

const BottomMessage = () => {
	const navigateToRegister = () => navigate("/register");
	const navigateToRecoveryPassword = () => navigate("/password/recovery");

	return <GlobalDiv paddingVertical="2em" textAlign="center">
		<MessageNormal display="inline-block">
			¿No tienes cuenta?
		</MessageNormal>
		<MessageLink onClick={navigateToRegister} display="inline-block">
			Registrate.
		</MessageLink>
		<GlobalDiv paddingVertical=".8em" textAlign="center">
			<MessageLink onClick={navigateToRecoveryPassword}>
				Olvide mi contraseña
			</MessageLink>
		</GlobalDiv>
	</GlobalDiv>
};

export default memo(BottomMessage);