import React from "react";
import { RecommendationCard, RecommendationText } from "./styles";
import { Link } from "@reach/router";

const ListRecommendationCard = (props) => {
	const { image, title, link } = props;
	return (
		<RecommendationCard className="recommendation-card">
			<img src={image} alt="" className="flex-image" />
			<div className="flex-detail">
				<RecommendationText>{title}</RecommendationText>
				<Link to={link}>
					<RecommendationText color="var(--color-secondary)">
						Ver más del curso
					</RecommendationText>
				</Link>
			</div>
		</RecommendationCard>
	);
};

export default ListRecommendationCard;
