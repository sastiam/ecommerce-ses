import styled from "styled-components";

export const Grid = styled.div`
	display:grid;
	grid-template-columns:repeat(13,1fr);
	margin:2em 0;
`

export const ItemClientImage = styled.img`
	height: 70px;
	object-fit: cover;
	object-position: center;
	-webkit-user-drag:none;
`;

export const ItemClientDisplay = styled.div`
	display: flex;
	margin-right: 2em;
`;

export const Scrollable = styled.div`
	overflow-x:scroll;
	width:80%;
	margin:auto;
	&::-webkit-scrollbar{
		display:none;
	}
`