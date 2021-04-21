import React, { Fragment } from "react";
import LinkTextSelectable from "components/layouts/PanelTabsMainEditor/LinkTextSelectable";
import { FaPlayCircle, FaUserFriends, FaHeart } from "react-icons/fa";

const size = 14;

const EditorMyCoursesLinks = () => {
	return <Fragment>
		<LinkTextSelectable to="./" icon={<FaPlayCircle size={size}/>}>Mis cursos</LinkTextSelectable>
		<LinkTextSelectable to="favorites" icon={<FaHeart size={size}/>}>Mis favoritos</LinkTextSelectable>
		<LinkTextSelectable to="mentors" icon={<FaUserFriends size={size}/>}>Mis Mentores</LinkTextSelectable>
	</Fragment>;
};

export default EditorMyCoursesLinks;
