import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

const Wrapper = styled.div`
	.editable--loading {
		margin-bottom:30px;
	}
	.editable--loading .editable__title {
		margin-bottom:5px;
	}
`
const repeat = 4;

const DetailProfileLoading = () => {

	return (
		<Wrapper>
			{[...Array(repeat)].map((_, key) => (
				<div className="editable--loading" key={key}>
					<Skeleton height="15px" width="40%" className="editable__title" />
					<Skeleton height="150px" className="editable__description" />
				</div>)
			)}
		</Wrapper>
	)
}

export default DetailProfileLoading
