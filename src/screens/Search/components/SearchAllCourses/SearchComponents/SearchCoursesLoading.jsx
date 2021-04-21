import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import CardLoadingSkeleton from "components/pages/Courses/CardLoadingSkeleton";

const FlexContainerLoadingCards = styled.div`
	display : grid;
	width : 100%;
	grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
	gap : 2em;
	margin-top: 2em;
`;

const SearchCoursesLoading = () => {
	return <FlexContainerLoadingCards>
		{Array(3).fill(0).map((e,i) => (
			<CardLoadingSkeleton key={i} />
		))}
	</FlexContainerLoadingCards>;
};

export default SearchCoursesLoading;
