import { Spinner } from "components/common/Loading/styles";
import React from "react";
import styled from "styled-components";

const FullScreenWrapper = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background-color: var(--color-base-dark);
	display:flex;
	z-index:10;
	> * {
		margin:auto;
	}
`;

const VideoCourseLoading = () => {
	return (
		<FullScreenWrapper>
			<Spinner/>
		</FullScreenWrapper>
	);
};

export default VideoCourseLoading;
