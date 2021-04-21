import React from 'react'
import PaymentFlex from '../shared/PaymentFlex'
import PaymentText from '../shared/PaymentText'

const RowPaymentDate = ({date,datetime}) => {
	return (
		<PaymentFlex widthActive flexDirection="column" flex="none">
			<PaymentText className="date" color="light">{date}</PaymentText>
			<PaymentText className="date" fontSize="12px" color="smooth" > {datetime} </PaymentText>
		</PaymentFlex>
	)
}

export default RowPaymentDate
