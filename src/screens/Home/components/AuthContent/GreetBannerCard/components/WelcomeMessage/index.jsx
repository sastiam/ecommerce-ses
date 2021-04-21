import React, { useContext } from "react";
import { AuthContext } from "../../../../../../../context/Auth";
import { ContentText , WelcomeText } from './styles'

const WelcomeMessage = () => {
	const { userAuthInformation } = useContext(AuthContext);
	const { fullName } = userAuthInformation;

	const name = fullName.split(" ")[0];

	return (
		<ContentText>
			<WelcomeText>
				Hola, <WelcomeText weight="900">{name}</WelcomeText>. ¡Qué bueno verte!
			</WelcomeText>
		</ContentText>
	);
};

export default WelcomeMessage;