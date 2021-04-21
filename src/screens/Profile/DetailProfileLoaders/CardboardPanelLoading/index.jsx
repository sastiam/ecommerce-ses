import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

const Wrapper = styled.div`
	width:100%;
	display:flex;
	justify-content:space-between;
	.cardboard--loading {
		margin:0 10px;
		width:100%;
	}
	.cardboard__title {
		margin-bottom:10px;

	}
`

const repeat = 3;

const CardboardPanelLoading = () => {
	return (
		<Wrapper>
			{[...Array(repeat)].map((_, key) => (
				<div className="cardboard--loading" key={key}>
					<Skeleton width="80%" height="20px" className="cardboard__title" />
					<Skeleton height="40px" />
					<Skeleton height="40px" />
				</div>
			))}
		</Wrapper>
	)
}

export default CardboardPanelLoading
