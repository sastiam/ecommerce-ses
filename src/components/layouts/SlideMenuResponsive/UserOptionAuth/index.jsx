import React, { useContext } from "react";
import { Link } from "@reach/router";
import "./index.scss";
import { AuthContext } from "../../../../context/Auth";

const UserOptionAuth = () => {
	const { userAuth , onCloseSession } = useContext(AuthContext);

	const onClickLogout = () => userAuth ? onCloseSession() : false;

	return <div className="content-user-auth-menu-slide">
		<ul className="list-item-user-menu-slide">
			<li className="item-option-user-menu-slide">
				<Link className="option" to="/configuration">Configuracion</Link>
			</li>
			<li className="item-option-user-menu-slide">
				<button className="option" onClick={onClickLogout}>Cerrar Sesion</button>
			</li>
		</ul>
	</div>
}

export default UserOptionAuth;