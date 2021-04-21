import React from "react";
import { BsStar, BsStarFill , BsStarHalf } from "react-icons/bs";
import styled from "styled-components";

const StarContainer = styled.span`
	font-size: ${props => props.size};
	line-height: 0;
	color: var(--color-star);
`;

const Star = props => {
	const { type , size = "1.5em" } = props;

	return <StarContainer size={size}>
		{ type === "full" ? 
			<BsStarFill /> : 
			type === "empty" ? <BsStar /> : <BsStarHalf />
		}
	</StarContainer>
}

export default Star;