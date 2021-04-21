import React from "react";
import "./index.scss";
import SidebarMenuCategories from "components/pages/Courses/SidebarMenuCategories";
import GlobalDiv from "components/common/GlobalDiv";
import SearchButtonFilter from "./SearchComponents/SearchButtonFilter";
import style from "styles/index.scss";
import { useMediaQuery } from "react-responsive";
import useToggle from "hooks/useToggle";
import classNames from "classnames";
import SearchButtonCloseAside from "./SearchComponents/SearchButtonCloseAside";
import SearchRouter from "./SearchRouter";
import SearchFilterTitle from "./SearchFilterTitle";

const SearchAllCourses = () => {

	const isTablet = useMediaQuery({ query: `(max-width:${style.mediaTabletBig})` });
	const padding = isTablet ? "0" : "5em";
	const { isToggle, onToggle } = useToggle(false);
	const classNameAside = classNames("row-col row__aside", { open: isToggle });

	const ButtonCloseAside = isTablet && <SearchButtonCloseAside onClick={onToggle} />;
	const ButtonFilter = isTablet && <SearchButtonFilter onClick={onToggle} />;

	return (
		<div className="search-courses">
			<GlobalDiv paddingBottom={padding}>
			 <SearchFilterTitle/>
				<div className="row">
					<div className={classNameAside}>
						{ButtonCloseAside}
						<SidebarMenuCategories />
					</div>
					<div className="row-col row__results">
						{ButtonFilter}
						<SearchRouter/>
					</div>
				</div>
			</GlobalDiv>
		</div>
	);
};

export default SearchAllCourses;
