import React from "react";
import { IoIosOptions } from "react-icons/io";
import GlobalDiv from "components/common/GlobalDiv";

const SearchButtonFilter = (props) => {
	const { onClick } = props;
	return (
		<GlobalDiv paddingTop="1em" paddingBottom="2em" onClick={onClick}>
			<GlobalDiv
				paddingVertical="15px"
				paddingHorizontal="20px"
				textAlign="center"
				className="filter-button"
			>
				<IoIosOptions size={25} className="icon" />
				<GlobalDiv sizeWidth="auto">Tus Filtros</GlobalDiv>
			</GlobalDiv>
		</GlobalDiv>
	);
};

export default SearchButtonFilter;
