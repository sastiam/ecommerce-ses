import React from "react";
import TitleBold from "components/common/TitleBold";
import { IoIosArrowRoundBack } from "react-icons/io";
import GlobalDiv from "components/common/GlobalDiv";
import styled from "styled-components";

const CloseFlex = styled.div`
	display: inline-flex;
	align-items: center;
	margin-top:1em;
`;

const SearchButtonCloseAside = ({ onClick }) => {
	return (
		<GlobalDiv paddingHorizontal="10px">
			<TitleBold color="var(--color-secondary)" fontSize="13px">
				<CloseFlex onClick={onClick}>
					<IoIosArrowRoundBack size={25} /> Regresar
				</CloseFlex>
			</TitleBold>
		</GlobalDiv>
	);
};

export default SearchButtonCloseAside;
