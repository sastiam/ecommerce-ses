export namespace Types {
	
	export interface IContextProvider {
		updatePassword : updatePasswordType;
	}

	export interface IUserPurchases {

	}

	export interface IPanelEditorAccountProvider {
		children : React.ReactNode;
	}

	type updatePasswordType = (oldPassword : string , newPassword : string) => Promise<void>;
}