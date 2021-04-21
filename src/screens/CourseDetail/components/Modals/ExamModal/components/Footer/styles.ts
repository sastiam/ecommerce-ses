import styled from "styled-components";

export const MainContainer = styled.div`
	width: 100%;
	height: var(--footer-height);
	background-color: #DDDDDD;
`;

export const FooterContainer = styled.div`
	width: 85%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const PercentageExam = styled.span`
	font-weight: bold;
	font-style: italic;
	color: #A0A0A0;
`;

export const ExamFinishButton = styled.button`
	background-color: var(--color-secondary-darken);
	font-size: .95em;
	color: #fff;
	padding: 5px 2em;
	font-weight: bold;
	border-radius: 1em;

	&:hover {
		background-color: var(--color-secondary);
	}

	&:active {
		transform: scale(.97);
	}

	&:disabled {
		background-color: #C9C9C9;
		color: #909090;
		cursor: initial;
	}

`;