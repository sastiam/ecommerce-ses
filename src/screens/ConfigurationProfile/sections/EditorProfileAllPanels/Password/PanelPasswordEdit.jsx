import React, { useRef, useContext, useState } from "react";
import PanelEditorDescriptive from "../../../../../components/layouts/PanelTabsMainEditor/PanelEditorDescriptive";
import EditorProfileInput from "../../../components/EditorProfileInput";
import GlobalButton from "../../../../../components/common/GlobalButton";
import { PanelEditorAccountContext } from "../../../../../context/PanelEditorAccount";
import FixedMessageTooltip from "screens/ConfigurationProfile/components/FixedMessageTooltip";

const PanelPasswordEdit = () => {
	const oldPassword = useRef();
	const newPassword = useRef();
	const { updatePassword } = useContext(PanelEditorAccountContext);
	const [updated, setUpdated] = useState(false);
	const onChangePassword = () => {
		updatePassword(oldPassword.current.value, newPassword.current.value);
		setUpdated(true);
		setTimeout(() => setUpdated(false), 3000);
	};

	return (
		<PanelEditorDescriptive
			title="Contraseña"
			message="Cambia tu contraseña cuando lo necesites. Por seguridad, te recomendamos que esté compuesta de letras y números."
		>
			<EditorProfileInput
				ref={oldPassword}
				placeholder="Ingresar contraseña actual"
				type="password"
			/>
			<EditorProfileInput
				ref={newPassword}
				placeholder="Ingresar nueva contraseña"
				type="password"
			/>
			<GlobalButton onClick={onChangePassword}>
				Cambiar mi contraseña
			</GlobalButton>
			<FixedMessageTooltip visible={updated} />
		</PanelEditorDescriptive>
	);
};

export default PanelPasswordEdit;
