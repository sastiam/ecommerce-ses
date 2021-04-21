import React from "react";
import RowPaymentDate from "./components/RowPaymentDate";
import RowPaymentDetail from "./components/RowPaymentDetail";
import RowPaymentPrice from "./components/RowPaymentPrice";
import PaymentFlex from "./shared/PaymentFlex";
import moment from "moment";

const RowPayment = ({ title, datePurchase, price }) => (
	<PaymentFlex
		marginBottomResponsive="2.5em"
		hoverable={true}
		align="center"
		justify="space-between">
		<RowPaymentDate
			date={moment(datePurchase).format("MMM M").toUpperCase()}
			datetime={moment(datePurchase).format("H:m A")} />
		<RowPaymentDetail course={title} />
		<RowPaymentPrice price={price} />
	</PaymentFlex>
);
export default RowPayment;
