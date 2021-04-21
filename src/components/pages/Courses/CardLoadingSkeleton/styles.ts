import styled from "styled-components";

const MainContainer = styled.div`
	width: 100%;
	flex: none;
	display: grid;
	grid-gap: 5px;
`;

const FooterContainer = styled.div`
	display: grid;
	grid-template-columns : 60px 1fr;
	grid-gap: 5px;
`;

export {
	MainContainer,
	FooterContainer
}