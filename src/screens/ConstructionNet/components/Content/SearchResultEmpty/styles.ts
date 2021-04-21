import styled from "styled-components";

export const MainContainer = styled.div`
	height: 45vh;
	max-height: 400px;
	min-height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width : 750px){
		font-size: .9em;
	}

	@media screen and (max-width : 500px){
		min-height: 250px;
		max-height: 300px;
	}
`;

export const SearchContainer = styled.div`
	display: grid;
	justify-items: center;
	row-gap: 2em;
`;

export const ImageSearch = styled.img`
	--size: 128px;
	width: var(--size);
	height: var(--size);

	@media screen and (max-width : 750px){
		--size: 96px;
	}

	@media screen and (max-width : 500px){
		--size: 64px;
	}
`;

export const TextContainer = styled.div`
	display: grid;
	row-gap: 6px;
	text-align: center;;
`;

export const Title = styled.span`
	font-weight: bold;
	font-size: 1.1em;
`;

export const Description = styled.span`
	font-weight: 300;
	font-size: 1em;
`;