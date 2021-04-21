import styled from "styled-components";

export const MainContainer = styled.div`
	--footer-height: 80px;

	width: 90vw;
	height: 100%;

	@media screen and (max-width: 550px) {
		width: 100vw;
		font-size: .9em;
	}
`;

export const Container = styled.div`
	width: 85%;
	height: calc(100% - var(--footer-height));
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 400px;
	align-items: flex-start;

	@media screen and (max-width: 1200px){
		grid-template-columns: 1fr 360px;
	}

	@media screen and (max-width: 1080px){
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: 1080px){
		width: 90%;
	}
`;

export const ExamContent = styled.div`
	width: 100%;
	height: 100%;
	overflow: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const QualificationsContent = styled.div`
	width: 100%;
	height: 100%;
	overflow: auto;
	padding: 4em 10px;
	display: flex;
	justify-content: center;
	align-items: flex-start;

	&::-webkit-scrollbar {
		display: none;
	}
`;