import styled from "styled-components";

const GridResponsive = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(5,minmax(1fr,300px));
	grid-gap: 15px;
	padding-bottom: 2em;

	@media screen and (max-width: 1600px){
		grid-template-columns: repeat(4,1fr);
	}
	@media screen and (max-width: 1200px){
		grid-template-columns: repeat(3,1fr);
	}

	@media screen and (max-width: 1000px){
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 600px){
		height: auto;
		padding: 1em 0;
		display: flex;
		overflow-x: auto;
		justify-content: flex-start;
		grid-gap: 0;

		.edit {
			width: 280px;
			flex: none;
			margin-right: 1em;
		}

		&::-webkit-scrollbar {
			display: none;
		}	
	}
`;

export {
	GridResponsive
}