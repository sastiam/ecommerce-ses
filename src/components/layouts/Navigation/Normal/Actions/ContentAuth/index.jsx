import React, { useContext } from "react";
import { FiHeart } from "react-icons/fi";
import { navigate, useLocation } from "@reach/router";
import "./index.scss";

import Dropdown from "components/layouts/Dropdown";
import Icon from "components/common/Icon";
import ButtonAuth from "../ButtonAuth";

import { ModalControllerContext } from "context/ModalController";
import { AuthContext } from "context/Auth";

import useImagesLocal from "hooks/useImagesLocal";

const ContentAuth = () => {
	//Context
	const { updateStateDropdownNavigationBar , dropdownNavigationBar } = useContext(ModalControllerContext);
	const { userAuthInformation } = useContext(AuthContext);
	const { profileImage } = userAuthInformation;

	//Hooks
	const location = useLocation();
	const { emptyImage } = useImagesLocal();

	//Actions
	const onClickUserAction = () => updateStateDropdownNavigationBar(!dropdownNavigationBar);
	const onClickFavorite = () => navigate("/panel/favorites");
	const onClickMyCourses = () => navigate("/panel");

	const checkFavoritePage = location.pathname.split("/").includes("panel");

	return <>
		<div className="other-action">
			<ButtonAuth ghost title="Mis Cursos" onClick={onClickMyCourses} />
			{ !checkFavoritePage ? <Icon.AnimatableCircle icon={<FiHeart />} onClick={onClickFavorite} /> : null }
		</div>
		<div className="user-action">
			<div className="avatar" onClick={onClickUserAction} >
				<img className="image" src={profileImage ? profileImage : emptyImage} />
			</div>
			<Dropdown.UserActions />			
		</div>
	</>
}

export default ContentAuth;