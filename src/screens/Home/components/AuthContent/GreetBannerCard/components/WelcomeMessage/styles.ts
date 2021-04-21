import styled from "styled-components";

interface IProps {
	weight? : string
}

const WelcomeText = styled.span<IProps>`
	font-size: 28px;
	font-weight: ${({ weight }) => weight || 'initial'};

	@media screen and (max-width : 480px) {
		font-size: 26px;
	}
`;

const ContentText = styled.div`
	padding: 20px 0;

	@media screen and (max-width : 680px) {
		text-align: center;
	}

	@media screen and (max-width : 480px) {
		padding: 15px 8px;
	}
`;

export {
	WelcomeText,
	ContentText
}