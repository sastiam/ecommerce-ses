import React, { useRef, useContext, useState } from "react";
import EditorProfileInput from "../../../components/EditorProfileInput";
import GlobalButton from "../../../../../components/common/GlobalButton";
import PanelEditorDescriptive from "../../../../../components/layouts/PanelTabsMainEditor/PanelEditorDescriptive";
import { AuthContext } from "../../../../../context/Auth";
import { useMachine } from "@xstate/react";
import emailAccountMachine from "screens/ConfigurationProfile/machines/emailAccountMachine";
import userId from "screens/ConfigurationProfile/hoc/userId";
import FixedMessageTooltip from "screens/ConfigurationProfile/components/FixedMessageTooltip";

const PanelEmailAccountEdit = ({userId}) => {
	const _username = useRef();
	const _fullName = useRef();
	const { userAuthInformation: { username, fullName }, } = useContext(AuthContext);
	const [, send] = useMachine(emailAccountMachine);
	const [ updated, setUpdated ] = useState(false);
	const onChangeUsername = () => {
		send("CHANGE_USERNAME_ACCOUNT", { idUser:userId, username: _username.current.value, fullName: _fullName.current.value });
		setUpdated(true);
		setTimeout(()=>setUpdated(false),3000);
	};

	return (
		<PanelEditorDescriptive
			title="Mi cuenta personal"
			message="Puedes cambiar tu nombre de usuario y tu nombre completo cuantas veces lo desees. Acuérdate que al momento de modificarlos, tu inicio de sesión y la URL de tu perfil también cambiarán."
		>
			<EditorProfileInput
				ref={_fullName}
				defaultValue={fullName}
				title="Nombre completo"
				placeholder="Nombre completo"
			/>
			<EditorProfileInput
				ref={_username}
				defaultValue={username}
				title="Nombre de usuario"
				placeholder="Nombre de usuario"
			/>
			<GlobalButton onClick={onChangeUsername}>Cambiar mis datos</GlobalButton>
			<FixedMessageTooltip visible={updated} />
		</PanelEditorDescriptive>
	);
};

export default userId(PanelEmailAccountEdit);
