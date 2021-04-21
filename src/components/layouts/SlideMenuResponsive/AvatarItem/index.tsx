import React, { memo, useContext } from "react";
import { Link } from "@reach/router";
import "./index.scss";
import { AuthContext } from "../../../../context/Auth";
import useImagesLocal from "../../../../hooks/useImagesLocal";

const AvatarItem = () => {
	//Hooks
	const { emptyImage } = useImagesLocal();
	
	//Context
	const { userAuthInformation } = useContext(AuthContext);
	const { profileImage , username , fullName , idUser } = userAuthInformation!;

	return <div className="avatar-item-slide">
		<div className="image">
			<img src={profileImage || emptyImage} alt="" className="profileImage"/>
		</div>
		<div className="information">
			<span className="username">{username || fullName}</span>
			<Link className="link" to={`/users/${idUser}`}>Ver perfil</Link>
		</div>
	</div>
}

export default memo(AvatarItem);