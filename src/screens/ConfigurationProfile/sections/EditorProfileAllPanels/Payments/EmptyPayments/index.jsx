import React from "react";
import "./index.scss";
import GlobalButton from "components/common/GlobalButton";
import TitleBold from "components/common/TitleBold";
import GlobalDiv from "components/common/GlobalDiv";
import { navigate } from "@reach/router";

const EmptyPayments = () => {
	return (
		<div className="empty-payment">
			<TitleBold fontSize="1.3em">Aún no has realizado una compra</TitleBold>
			<GlobalDiv paddingVertical="25px">
				<p className="empty-payment__message">
					Realiza una compra para poder visualizar tus pagos
				</p>
			</GlobalDiv>
			<GlobalButton onClick={() => navigate('/search')}>Vamos a buscar</GlobalButton>
		</div>
	);
};

export default EmptyPayments;
