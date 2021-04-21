import styled from "styled-components";

//Styles
export const Container = styled.div({
	width : 600,
	backgroundColor : '#fff',
	borderRadius : 25,
	overflow : 'hidden'
})

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 250px;
	grid-gap: 1em;
`;

export const IconClose = styled.button`
	position: absolute;
	top : 10px;
	right : 10px;
	font-size: 2em;
	cursor: pointer;
	background: none;
	color: var(--color-light);
`;