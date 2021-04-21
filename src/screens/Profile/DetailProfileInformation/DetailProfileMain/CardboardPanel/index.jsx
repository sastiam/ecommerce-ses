import React, { useContext } from "react";
import "./index.scss";
import ShowUserOnly from "components/pages/User/ShowUserOnly";
import PanelStudent from "./PanelStudent";
import PanelMentors from "./PanelMentors";
import { UserDetailContext } from "context/UserDetail";
import CardboardChipsUserCourses from "./CardboardChipsUserCourses";
import CardboardPanelLoading from "../../../DetailProfileLoaders/CardboardPanelLoading";

const CardboardPanel = () => {
	const { userData, loadingPanel } = useContext(UserDetailContext);
	if(loadingPanel) {
		return <CardboardPanelLoading/>
	}

	return (
		<div className="card-panel">
			<div className="flex-space">
				<ShowUserOnly
					isUsername={
						{
							1: <PanelStudent />,
							2: <PanelMentors />,
						}[userData.idTypeUser || 1]
					}
					notIsUsername={
						{
							1: <PanelStudent />,
							2: <PanelMentors />,
						}[userData.idTypeUser]
					}
				/>
			</div>
			<CardboardChipsUserCourses/>
		</div>
	);
};

export default CardboardPanel;
