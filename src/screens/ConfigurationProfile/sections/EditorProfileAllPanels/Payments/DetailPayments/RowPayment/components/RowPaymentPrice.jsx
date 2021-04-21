import React from "react";
import GlobalTitle from "components/common/GlobalTitle";
import style from "styles/index.scss";
import { useMediaQuery } from "react-responsive";
import PaymentFlex from "../shared/PaymentFlex";

const RowPaymentPrice = ({ price }) => {
	const isMobile = useMediaQuery({ query : `(max-width:${style.mediaMobileBig})` });

	return (
		<PaymentFlex flex="none">
			<GlobalTitle
				text={"S/ " + price }
				fontWeight="bold"
				autoWidth
				fontSize={isMobile ? ".25rem" : ".4rem"}
				className="price"
			/>
		</PaymentFlex>
	);
};

export default RowPaymentPrice;
