import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	height: 60%;
	overflow: auto;

	&::-webkit-scrollbar { width: 3px; }

	&::-webkit-scrollbar-thumb {
		border-radius: 3px;
		background-color: rgb(199, 199, 199);
	}
`;