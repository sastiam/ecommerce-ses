import React from "react";
import PanelEmailAccountEdit from "./Account/PanelEmailAccountEdit";
import PanelPasswordEdit from "./Password/PanelPasswordEdit";
import PanelPayments from "./Payments/DetailPayments";
import { Router } from "@reach/router";

const EditorProfileAllPanels = () => {
	return (
		<Router primary={false} >
			<PanelEmailAccountEdit path="/" />
			<PanelPasswordEdit path="/password" />
			<PanelPayments path="/payments" />
		</Router>
	);
};

export default EditorProfileAllPanels;
