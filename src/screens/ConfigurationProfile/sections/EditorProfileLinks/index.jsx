import React, { Fragment, useContext } from 'react'
import LinkTextSelectable from '../../../../components/layouts/PanelTabsMainEditor/LinkTextSelectable'
import { AuthContext } from '../../../../context/Auth'

const EditorProfileLinks = () => {
	const {  userAuthInformation: { idUser } } = useContext(AuthContext);
	return (
		<Fragment>
			<LinkTextSelectable to={`/users/${idUser}`} >Editar perfil</LinkTextSelectable>
			<LinkTextSelectable to="./" >Cuenta usuario</LinkTextSelectable>
			<LinkTextSelectable to="password" >Contraseña</LinkTextSelectable>
			<LinkTextSelectable to="payments" >Mis pagos</LinkTextSelectable>
		</Fragment>
	)
}

export default EditorProfileLinks
