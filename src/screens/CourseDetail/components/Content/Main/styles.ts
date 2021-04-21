import styled from "styled-components";

const ContainerGrid = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3,minmax(300px,1fr));
	justify-content: space-between;
	grid-gap: 30px; 
	padding-bottom: 2em;

	@media screen and (max-width: 1350px){
		grid-template-columns: repeat(2,minmax(300px,1fr));
	}

	@media screen and (max-width: 920px){
		overflow-x : auto;
		grid-template-columns: repeat(3,1fr);
		
		&::-webkit-scrollbar {
			display : none;
		}
	}
`;

export {
	ContainerGrid
}