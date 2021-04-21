import React from "react";
import "./index.scss";

//Components
import ContainerCourses from "./ContainerCourses";
import CourseMessage from "./CourseMessage";

//Context
import { FilterHomeBarProvider } from "context/FilterHomeBar";
import GlobalDiv from "components/common/GlobalDiv";
import TitleBold from "components/common/TitleBold";

const HomeCourses = () => (
	<FilterHomeBarProvider>
		<section className="container-filter">
			<GlobalDiv paddingTop="6em" paddingBottom="2em" textAlign="center">
				<TitleBold className="title-main-filter" fontSize="2.2em">¿Que deseas aprender hoy?</TitleBold>
			</GlobalDiv>
			<div className="container-courses">
				<ContainerCourses />
			</div>
			<CourseMessage />
		</section>
	</FilterHomeBarProvider>
);

export default HomeCourses;