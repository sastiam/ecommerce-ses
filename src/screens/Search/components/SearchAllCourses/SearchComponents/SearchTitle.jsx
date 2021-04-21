import React from "react";
import styled from "styled-components";

const StyledWrapper  = styled.div`
	display:block;
	margin-left:auto;
	text-align:right;
	> * {
		display:inline-block;
	}
`

const TextPlaceholder = styled.span`
	color:var(--color-light);
	`
const TextCategory = styled.span`
	color:var(--color-dark);
	font-weight:bold;
	margin-left:10px;
`

const SearchTitle = ({ title }) => {
	return (
		<StyledWrapper>
			<TextPlaceholder>Actualmente estás viendo:</TextPlaceholder>
			<TextCategory>{title || "Cursos en general"}</TextCategory>
		</StyledWrapper>
	);
};

export default SearchTitle;
