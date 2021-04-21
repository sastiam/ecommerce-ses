import React, { useContext, memo } from "react";
import "./index.scss";
import classnames from "classnames";
import { Link  } from "@reach/router";

//Parent Context
import { ModalControllerContext } from "../../../context/ModalController";

import { FaTimes } from "react-icons/fa";
import { AuthContext } from "../../../context/Auth";

//UI
import TitleBold from "../../common/TitleBold";

//Components
import AvatarItem from "./AvatarItem";
import ContainerButtonsAuth from "./ContainerButtonsAuth";
import UserOptionAuth from "./UserOptionAuth";

const SlideMenuResponsive = () => {
	//Context
	const { slideMenu , updateStateSlideMenu } = useContext(ModalControllerContext);
	const { userAuth } = useContext(AuthContext);
	
	const styles = classnames("slide-menu",{ hide : !slideMenu });
	const onClickClose = () => updateStateSlideMenu(false);

	return <div className={styles}>
		<div className="container-slide">
			{	userAuth ? <AvatarItem /> :
				<div className="title">
					<TitleBold color="var(--color-base)" fontSize="2.2em">Isesac</TitleBold>
				</div> }
			<div className="container-list">
				<ul className="list">
					<li className="item">
						<Link className="item-link"  to="/">Inicio</Link>
					</li>
					<li className="item">
						<Link className="item-link"  to="/about-us">Nosotros</Link>
					</li>
					<li className="item">
						<Link className="item-link" to="/search">Cursos</Link>
					</li>
					<li className="item">
						<Link className="item-link"  to="/tutorial">Red de Construcción</Link>
					</li>
					<li className="item">
						<Link className="item-link"  to="/mentors">Instructores</Link>
					</li>
				</ul>
			</div>
			{ !userAuth ? <ContainerButtonsAuth /> : <UserOptionAuth /> }		
		</div>
		<span className="icon-close" onClick={onClickClose}>
			<FaTimes />
		</span>
	</div>
}

export default memo(SlideMenuResponsive);