import GlobalDiv from "components/common/GlobalDiv";
import ItemCard from "components/pages/Courses/ItemCard";
import React from "react";

const SearchCoursePreview = ({ data }) => {
	return (
		<GlobalDiv paddingTop="2em">
			<div className="grid-search-courses">
				{data.map((v, i) => (
					<ItemCard key={i} courseInformation={v} />
				))}
			</div>
		</GlobalDiv>
	);
};

export default SearchCoursePreview;
