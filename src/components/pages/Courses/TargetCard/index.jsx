import React from "react";
import styled, { css } from "styled-components";

const Card = styled.article`
	width : max-content;
	border : 1px solid rgb(230,230,230);
	padding: .8em 1.5em;
	border-radius: 2em;
	cursor: pointer;
	margin : 3px;
	
	${({ simple }) => simple && css`
		font-size : .8em;
		span {
			color: rgb(180,180,180);
		}
	`}

	&:hover {
		border-color: var(--color-base);
		span {
			color: var(--color-base);
		}
	}
	${props => props.selected && css`
	border-color: var(--color-base);
		span {
			color: var(--color-base);
		}
	`}
`;	

const Text = styled.span`
	color: var(--color-black);
	font-weight : 600;
`;

const TargetCard = props => {
	const { title , simple , selected , onClick } = props;

	return <Card simple={simple} onClick={onClick} selected={selected}>
		<Text>{title}</Text>
	</Card>
}

TargetCard.defaultProps = {
	simple : false,
	selected : false
}

export default TargetCard;