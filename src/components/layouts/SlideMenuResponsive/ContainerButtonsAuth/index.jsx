import React, { memo, useContext } from "react";
import { useNavigate } from "@reach/router";
import "./index.scss";

//Parent Context
import GlobalButton from "../../../common/GlobalButton";
import { ModalControllerContext } from "context/ModalController";

const ContainerButtonsAuth = () => {
	//Hooks
	const navigate = useNavigate();
	const { updateStateSlideMenu } = useContext(ModalControllerContext);

	//Actions
	const onClick = (link) => () => {
		if(window.location.href.includes(link)){
			updateStateSlideMenu(false);
			return;
		}

		navigate("/" + link);
	};

	return <div className="container-buttons">
		<GlobalButton onClick={onClick("register")} sizeWidth="100%" >Registrate</GlobalButton>
		<GlobalButton onClick={onClick("login")} data-cy="button-auth-sidebar" sizeWidth="100%" ghost>Inicia Sesion</GlobalButton>			
	</div>
}

export default memo(ContainerButtonsAuth);