import React, { lazy, useContext } from "react";

//Templates
import Navigation from "components/layouts/Navigation";
import FooterDetail from "components/layouts/FooterDetail";

//Components
import MainLayout from "components/layouts/MainLayout";
import { AuthContext } from "context/Auth";
import NotAuthContent from "./components/NotAuthContent";
import AuthContent from "./components/AuthContent";

const Home = () => {
	const { userAuth } = useContext(AuthContext)

	return (
		<MainLayout titlePage="Home">
			<Navigation.Normal />
			{ 
				!userAuth ? 
					<NotAuthContent /> : 
					<AuthContent />
			}
			<FooterDetail />
		</MainLayout>
	);
};

export default Home;
