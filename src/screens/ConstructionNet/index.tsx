import React from "react";

//Components
import MainLayout from "../../components/layouts/MainLayout";
import Navigation from "../../components/layouts/Navigation";
import FooterDetail from "../../components/layouts/FooterDetail";
import Content from "./components/Content";

import useConstructionNetInit from "./hooks/useConstructionNetInit";

const ConstructionNet = () => {
	useConstructionNetInit();

	return <MainLayout titlePage="Tutoriales" >
		<Navigation.Normal />
		<Content />
		<FooterDetail />
	</MainLayout>
};

export default ConstructionNet;