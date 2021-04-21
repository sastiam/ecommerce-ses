import React from "react";

import Navigation from "components/layouts/Navigation";
import FooterDetail from "components/layouts/FooterDetail";

//Provider
import MainLayout from "components/layouts/MainLayout";
import TitleMotive from "./components/TitleMotive";
import ContainerListAllMentors from "./containers/ContainerListAllMentors";

const Mentors = () => {
	return (
		<MainLayout titlePage="Mentors">
			<Navigation.Normal />
			<TitleMotive />
			<ContainerListAllMentors/>
			<FooterDetail />
		</MainLayout>
	);
};

export default Mentors;
