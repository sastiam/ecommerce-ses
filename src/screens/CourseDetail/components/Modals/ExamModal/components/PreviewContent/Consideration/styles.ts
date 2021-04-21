import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 6px;
	
	&:last-child {
		margin-bottom: 0;
	}
`;

export const Circle = styled.span`
	width: 10px;
	height: 10px;
	display: block;
	line-height: 0;
	background-color: #313131;
	border-radius: 50%;
	margin-right: 12px;
`;

export const Text = styled.span`
	color: #5C5C5C;
	font-size: 1.05em;
	font-weight: 400;
	font-family: 'Roboto' , sans-serif;
`;