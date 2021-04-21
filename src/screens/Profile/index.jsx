import React from "react";
import DetailProfileInformation from "./DetailProfileInformation";
import HeaderProfileInformation from "./HeaderProfileInformation";
import Navigation from "../../components/layouts/Navigation";
import { UserDetailProvider } from "../../context/UserDetail";
import MainLayout from "../../components/layouts/MainLayout";
import useParameters from "../../hooks/useParameters";

const Profile = () => {
	const { name } = useParameters();
	return (
		<MainLayout titlePage="Perfil" >
			<UserDetailProvider idUsername={name}>
				<Navigation.Normal />
				<HeaderProfileInformation />
				<DetailProfileInformation />
			</UserDetailProvider>	
		</MainLayout>
	)
}

export default Profile;
