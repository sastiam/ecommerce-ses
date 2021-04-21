import React, { memo } from 'react'
import styled from 'styled-components';

const StyledTab = styled.button`
	background:none;
	padding: 12px 0;
	border-radius:0;
	position: relative;
	transition: .3s;
	font-size:15px;
	font-weight:900;
	color: gray;
	${(props) => props.selected && `
		color: var(--color-bright);
		box-shadow:0 2px 0 var(--color-bright);
	`}
`;

const Tab = ({text,children,...restProps}) => (
	<StyledTab selected={restProps.selected} onClick={restProps.onClick}>{text}</StyledTab>
)

export default memo(Tab)
