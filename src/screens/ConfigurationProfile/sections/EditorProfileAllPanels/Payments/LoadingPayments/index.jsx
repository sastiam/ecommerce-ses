import React from 'react'
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components'

const Wrapper = styled.div`
	.payment--loading {
		margin-bottom:20px;
		display:flex;
		flex-direction:column;
	}
`

const repeat = 5;

const LoadingPayments = () => {
	return (
		<Wrapper>
			{Array(repeat).fill(0).map((_, index) => (
				<div className="payment--loading" key={index}>
					<Skeleton height="15px" width="28%" />
					<Skeleton height="15px" width="100%" />
					<Skeleton height="15px" width="45%" />
				</div>
			))}
		</Wrapper>
	)
}

export default LoadingPayments
