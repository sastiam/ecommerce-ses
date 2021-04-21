import styled from "styled-components";

interface IRecommendationTextProps {
	color : string;
	fontSize? : string;
	weight? : string;
	fontSizeMobile? : string;
}

export const RecommendationText = styled.div<IRecommendationTextProps>`
	color: ${(props) => props.color};
	font-size: ${(props) => props.fontSize || '14px'};
	font-weight: ${props => props.weight || 'bold'};
	@media (max-width : 700px) {
		font-size : ${props => props.fontSizeMobile};
	}
`;

interface IRecommendationCardProps {
	margin : string
}

export const RecommendationCard = styled.div<IRecommendationCardProps>`
	display: flex;

	.flex-image {
		width: 140px;
		height: 80px;
		flex: none;
	}

	.flex-detail {
		padding : 0 10px;
		width: 100%;
		display: flex;
		flex-direction : column;
		> *:last-child {
			margin-top: auto;
		}
	}

	margin: ${props => props.margin || '0 0 20px'};
`;
