import React, { createContext, useContext } from "react";
import { AuthContext } from "../Auth";
import { Types } from "./types";
import UserAccountRepository from "application/requests/UserAccountRepository";

const userAccount = new UserAccountRepository();

const PanelEditorAccountContext = createContext<Types.IContextProvider | undefined>(undefined);
const PanelEditorAccountProvider : React.FC<Types.IPanelEditorAccountProvider> = (props) => {
	const { children } = props;
	const {	userAuthInformation	} = useContext(AuthContext);
	const { idUser } = userAuthInformation!;

	//actions
 /**
  * @param oldPassword old password of user
  * @param newPassword set a new password 
  */
	const updatePassword : Types.updatePasswordType = async (oldPassword, newPassword) => {
		const request = await userAccount.updatePassword(idUser,oldPassword,newPassword);
		if (request) {
			alert("actualizado");
		} else {
			alert("contraseña incorrecta");
		}
	};

	return (
		<PanelEditorAccountContext.Provider
			value={{ updatePassword }}
		>
			{children}
		</PanelEditorAccountContext.Provider>
	);
};

export { PanelEditorAccountContext, PanelEditorAccountProvider };
