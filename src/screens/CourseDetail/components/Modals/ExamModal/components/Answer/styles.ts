import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: #EEEEEE;
	padding: 10px 1.3em;
	cursor: pointer;
	margin-bottom: 5px;

	&:hover {
		background-color: #E2E2E2;
	}
`;

export const RadioInput = styled.div`
	width: 24px;
	height: 24px;
	line-height: 0;
	border-radius: 50%;
	border: 2px solid;
	position: relative;
`;

export const SelectedElement = styled.div`
	width: 16px;
	height: 16px;
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #000;
	border-radius: 50%;
`;

export const AnswerDescription = styled.p`
	margin-left: 16px;
	font-family: 'Roboto' , sans-serif;
	font-weight: bold;
`;