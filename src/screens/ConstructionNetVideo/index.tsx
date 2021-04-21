import React from "react";
import "./index.scss";

//Components
import TutorialLoading from "./components/TutorialLoading";
import TutorialContent from "./components/TutorialContent";

//Utility
import MainLayout from "../../components/layouts/MainLayout";
import Navigation from "../../components/layouts/Navigation";
import FooterDetail from "../../components/layouts/FooterDetail";

//Hooks
import useInitPage from "./hooks/useInitPage";

const ConstructionNetVideo = () => {
	const { isLoading , post } = useInitPage();

	return <MainLayout titlePage="Tutoriales" >
		<Navigation.Normal />
		{
			isLoading ?
				<TutorialLoading /> :
				<TutorialContent data={post} />
		}
		<FooterDetail />
	</MainLayout>
}

export default ConstructionNetVideo;