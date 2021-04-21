import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #E1E1E1;
	border-radius: 5px;
	padding: 10px;
`;

export const Icon = styled.span`
	display: inline-block;
	line-height: 0;
	font-size: 1.2em;
	color: #909090;
	margin-right: 12px;
`;

export const Description = styled.span`
	width: 50%;
	color: #909090;
	font-weight: 500;
	font-size: 13px;
	font-style: italic;
	font-family: 'Roboto' , sans-serif;
`;