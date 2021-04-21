import React from "react"
import { Spinner } from "components/common/Loading/styles";
import styled from "styled-components";

const CenterWrapper = styled.div`
	display:flex;
	justify-content:center;
`;

const ListMentorsLoading = () => {
	return (
		<CenterWrapper>
			<Spinner />
		</CenterWrapper>
	);
};

export default ListMentorsLoading;
