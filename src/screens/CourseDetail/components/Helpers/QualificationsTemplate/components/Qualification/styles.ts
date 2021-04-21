import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1em 2em;
	background-color: #EEEEEE;
	border-radius: 5px;
	margin-bottom: 5px;

	&:hover {
		background-color: 
	}
`;

export const TextContent = styled.div`

`;

export const Title = styled.span`
	font-weight: bold;
	font-size: 13px;
	color: #313131;
	display: block;
`;

export const Date = styled.span`
	color: #A0A0A0;
	font-size: 12px;
	font-weight: 300;
	display: block;
	margin-top: 4px;

	&::first-letter {
		text-transform: uppercase;
	}
`;

interface IValueContainer {
	color : string;
}

export const ValueContainer = styled.div<IValueContainer>`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	color: ${({ color }) => color};
	border: 2px solid;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Text = styled.span`
	font-size: 12px;
	font-family: 'Roboto' , sans-serif;
	font-weight: 900;
`;