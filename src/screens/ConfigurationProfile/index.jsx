import React from "react";
import Navigation from "../../components/layouts/Navigation";
import FooterDetail from "../../components/layouts/FooterDetail"
import MainLayout from "../../components/layouts/MainLayout";
import { PanelEditorAccountProvider } from "context/PanelEditorAccount";
import PanelTabsMainEditor from "components/layouts/PanelTabsMainEditor";
import EditorProfileAllPanels from "./sections/EditorProfileAllPanels";
import EditorProfileLinks from "./sections/EditorProfileLinks";

const ConfigurationProfile = () => {
	return (
		<MainLayout titlePage="Configuracion">
			<Navigation.Normal />

			<PanelEditorAccountProvider>
				<PanelTabsMainEditor
					aside={<EditorProfileLinks />}
					main={<EditorProfileAllPanels />}
				/>
			</PanelEditorAccountProvider>

			<FooterDetail />
		</MainLayout>
	);
};

export default ConfigurationProfile;
