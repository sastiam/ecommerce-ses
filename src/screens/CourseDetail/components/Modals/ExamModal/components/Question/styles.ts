import styled from "styled-components";

export const Container = styled.div`
	margin-bottom: 4em;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const Title = styled.span`
	display: block;
	font-size: 1em;
	text-transform: uppercase;
	font-weight: bold;
	font-family: 'Roboto' , sans-serif;
	margin-bottom: 18px;
`;

export const QuestionDescription = styled.p`
	display: block;
	color: #5C5C5C;
	font-size: 0.99em;
	font-family: 'Roboto' , sans-serif;
	margin-bottom: 20px;
`;