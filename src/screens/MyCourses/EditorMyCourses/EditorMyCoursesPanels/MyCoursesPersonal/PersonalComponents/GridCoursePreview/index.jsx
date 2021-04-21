import React from 'react'
import GlobalDiv from 'components/common/GlobalDiv';
import styled from 'styled-components';

const GridWrapper = styled.div`
	display:grid;
	gap: 20px;
	grid-template-columns:repeat(3,1fr);
	@media screen and (max-width:1200px) {
		grid-template-columns:repeat(2,1fr);
	}
	@media screen and (max-width:426px) {
		grid-template-columns:repeat(1,1fr);
	}
`;

const GridCoursePreview = ({ data, children, emptyDataComponent }) => {
	const notIsEmpty = data.length !== 0;
	return (
		<GlobalDiv width="100%">
			{notIsEmpty ? (
				<GridWrapper>
					{data.map((item, index) => children(item, index))}
				</GridWrapper>
			) : emptyDataComponent}
		</GlobalDiv>
	)
}

export default GridCoursePreview
