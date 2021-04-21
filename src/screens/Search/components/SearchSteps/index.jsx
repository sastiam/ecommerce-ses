import React from "react";
import "./index.scss";
import useFilterCategory from "screens/Search/hooks/useFilterCategory";

const SearchSteps = () => {
	const category = useFilterCategory();

	return (
		<div className="search-steps">
			<p className="steps">
				Inicio &gt; Cursos online {category && `> ${category}`}
			</p>
		</div>
	);
};

export default SearchSteps;
