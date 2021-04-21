import React from "react";
import * as S from './styles';

import Navigation from "components/layouts/Navigation";
import SearchAllCourses from "./components/SearchAllCourses";
import MainLayout from "components/layouts/MainLayout";
import FooterDetail from "components/layouts/FooterDetail";
import BannerSwipeable from "components/layouts/BannerSwipeable";
import SearchSteps from "./components/SearchSteps";
import useDispatchFilterCategory from "./hooks/useDispatchFilterCategory";

const Search = () => {
	useDispatchFilterCategory();
	return (
		<MainLayout titlePage="Search">
			<Navigation.Normal />
			<S.Container>
				<BannerSwipeable />
				<SearchSteps />
				<SearchAllCourses />
			</S.Container>
			<FooterDetail />
		</MainLayout>
	);
}

export default Search;