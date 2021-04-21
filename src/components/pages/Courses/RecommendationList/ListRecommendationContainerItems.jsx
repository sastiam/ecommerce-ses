import React, { Fragment } from "react";
import ListRecommendationCard from "./ListRecommendationCard";

const ListRecommendationContainerItems = ({ data }) => {
	return (
		<Fragment>
			{data.map((current, i) => (
				<ListRecommendationCard
					key={i}
					image={current.imagePreview}
					title={current.title}
					link={`/course/${current.idCourse}`}
				/>
			))}
		</Fragment>
	);
};

ListRecommendationContainerItems.defaultProps = {
	data: [],
};

export default ListRecommendationContainerItems;
