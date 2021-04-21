import React, { memo } from "react";
import styled, { css } from "styled-components";
import SearchTitle from "../SearchComponents/SearchTitle";
import { useMediaQuery } from "react-responsive";
import { media } from "styles/responsive";
import useFilterCategory from "screens/Search/hooks/useFilterCategory";

const Wrapper = styled.div`
	position: relative;

	${(props) => !props.visible && css`{
				margin-bottom: 0;
				padding-bottom:0;
				margin-top: 30px;
				margin-bottom:30px;
	}`}


	${(props) => props.visible && css`{
				margin-bottom: 30px;
				padding-bottom:30px;
	}`}


	${(props) =>	props.visible && css`
			&::after {
				content: "";
				height: 1px;
				position: absolute;
				width: 100%;
				background-color: rgba(0, 0, 0, 0.1);
				bottom: 0;
			}
		`}
`;

const SearchFilterTitle = () => {
	const isSmall = useMediaQuery({ maxWidth: media.mediaTabletSmall });
	const category = useFilterCategory();
	return (
		<Wrapper visible={!isSmall}>
			<SearchTitle title={category} />
		</Wrapper>
	);
};

export default memo(SearchFilterTitle);
