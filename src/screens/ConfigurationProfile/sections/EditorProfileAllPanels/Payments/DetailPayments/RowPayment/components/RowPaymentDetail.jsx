import React from "react";
import GlobalDiv from "components/common/GlobalDiv";
import PaymentText from "../shared/PaymentText";
import PaymentFlex from "../shared/PaymentFlex";

const RowPaymentDetail = ({ course }) => {
	return (
		<PaymentFlex
			width="100%"
			margin="0 10px 0 20px"
			borderLeft="1px solid var(--color-light)"
		>
			<GlobalDiv paddingLeft="20px" paddingRight="10px">
				<PaymentText weight="bold" color="light" fontSize="1.1em">
					{" "}
					{course}{" "}
				</PaymentText>
				<PaymentText fontSize="12px" color="smooth">
					{" "}
					pagado{" "}
				</PaymentText>
			</GlobalDiv>
		</PaymentFlex>
	);
};

export default RowPaymentDetail;
