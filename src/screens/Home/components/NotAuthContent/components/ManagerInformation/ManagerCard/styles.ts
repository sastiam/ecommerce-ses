import styled from "styled-components";

export const Image = styled.img`
	width: inherit;
	height: inherit;
	filter: brightness(90%);
	transform: scale(1.2);
	object-fit: cover;
	transition: .3s;
`
export const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	line-height: 0;
`
export const InformationContainer = styled.div`
`;

export const ContainerTitle = styled.div`
	padding: 2em 1em;
	text-align: center;

	@media screen and (max-width : 1450px) {
		padding: 1.5em 1em;
		font-size: .95em;
	}

	@media screen and (max-width : 750px) {
		font-size: .9em;
	}
`
export const Title = styled.span`
	display: inline-block;
	font-size: 1.3em;
	font-weight: bold;
	color: #2D2D2D;
`;

export const ContainerList = styled.div``;

export const List = styled.ul`
	padding: 0 2.5em 1em 2.5em;
	list-style-type : circle;
`;

export const ItemList = styled.li`
	margin-bottom: 1em;
	font-weight: 500;
	color: #585858;

	@media screen and (max-width : 1450px) {
		font-size: .95em;
	}

	@media screen and (max-width : 750px) {
		font-size: .9em;
	}
`;

export const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-rows: 240px 1fr;
	border-radius: 30px;
	box-shadow: 0 5px 15px rgb(240,240,240);
	overflow: hidden;

	&:hover ${Image} {
		transform: scale(1);
	}

	@media screen and (max-width : 1450px) {
		grid-template-rows: 200px 1fr;
	}

	@media screen and (max-width : 680px) {
		grid-template-rows: 260px 1fr;
	}

	@media screen and (max-width : 520px) {
		grid-template-rows: 220px 1fr;
	}
`;