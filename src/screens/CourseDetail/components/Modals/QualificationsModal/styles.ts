import styled from "styled-components";

export const Container = styled.div`
	width: 380px;
	height: 100%;
	overflow: auto;
	padding: 2em 10px;
	display: flex;
	align-items: center;
	justify-content: center;

	&::-webkit-scrollbar {
		display: none;
	}

	@media screen and (max-width: 550px) {
		font-size: .9em;
		width: 90vw;
	}
`;