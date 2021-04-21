import React from "react";
import GlobalDiv from "components/common/GlobalDiv";
import GlobalTotalAnimated from "components/common/GlobalTotalAnimated";
import TitleBold from "components/common/TitleBold";
import styled from "styled-components";

const SmoothText = styled.div`
	color: silver;
	font-size: 11px;
	text-transform : uppercase;
	text-align: center;
`;

const ItemTotalStatistic = (props) => {
	const { total, message } = props;
	return (
		<GlobalDiv>
			<TitleBold fontSize="1.2rem" textAlign="center">
				<GlobalTotalAnimated total={total} style={{fontWeight:"800"}} steps={1} />
			</TitleBold>
			<GlobalDiv paddingTop="10px">
			<SmoothText>{message}</SmoothText>
			</GlobalDiv>
		</GlobalDiv>
	);
};

export default ItemTotalStatistic;
