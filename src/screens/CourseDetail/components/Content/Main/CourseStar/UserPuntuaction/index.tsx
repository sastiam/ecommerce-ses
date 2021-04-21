import React, { FC, memo } from "react";
import { useNavigate } from "@reach/router";
import { AiOutlineStar } from "react-icons/ai";
import "./index.scss";
import { IUserPunctuaction } from "../../../../../../../application/metadata/interfaces/User";
import useImagesLocal from "hooks/useImagesLocal";

interface IProps {
	user : IUserPunctuaction
}

const UserPuntuaction : FC<IProps> = ({ user }) => {
	const { emptyImage } = useImagesLocal();
	const { imagePreview , username , fullName , amount , idUser } = user;

	//Hooks
	const navigate = useNavigate();

	//Actions
	const onClick = () => navigate("/users/" + idUser);

	return <li className="user-puntuaction">
		<div className="container-user">
			<span className="image">
				<img className="img" src={imagePreview ? imagePreview : emptyImage} alt="user-image"/>
			</span>
			<span className="title" onClick={onClick}>{username ? "@" + username : fullName.substr(0,20) + "..."}</span>			
		</div>
		<div className="puntuaction">
			<span className="icon">
				<AiOutlineStar />
			</span>
			<span className="number">{amount % 1 ? amount : amount + ".0"}</span>
		</div>
	</li>
}

export default memo(UserPuntuaction);