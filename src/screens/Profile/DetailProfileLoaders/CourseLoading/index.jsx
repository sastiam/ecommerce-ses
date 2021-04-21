import React from 'react'
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components'

const Wrapper = styled.div`
	width:100%;
	margin:2em 0;
	.card-course-all--loading {
		padding:.6em;
	}
	.card-course--loading {
		margin-bottom:20px;
	}
`
const repeat = 6;

const CourseLoading = () => {
	return (
		<Wrapper>
			<div className="card-course-all--loading">
				{[...Array(repeat)].map((_, key) => (
					<div className="card-course--loading" key={key}>
						<Skeleton width="100%" height="100px" />
						<Skeleton width="100px" height="20px" />
					</div>
				))}
			</div>
		</Wrapper>
	)
}

export default CourseLoading
