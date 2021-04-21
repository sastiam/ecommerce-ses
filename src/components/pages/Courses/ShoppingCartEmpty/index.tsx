import React, { FC } from "react";
import { Link } from "@reach/router";
import classnames from "classnames";
import { IoMdHeartDislike } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import "./index.scss";

type TProps = {
	modal? : boolean;
	onModalIconClick?() : void;
}

const ShoppingCartEmpty : FC<TProps> = ({ modal , onModalIconClick }) => {
	const classDynamic = classnames("container-no-items",{ modal });

	return <>
		<div className={classDynamic}>
			<header className="header-title">
				<h1 className="text">Tu Carrito esta Vacio</h1>
			</header>
			<section className="icon">
					<IoMdHeartDislike />
			</section>
			<footer className="footer-button">
				<Link to="/search" className="button-footer-shoping ">Compra un curso ahora</Link>
			</footer>
		</div>
		{ modal ? 
			<span className="icon-modal-close" onClick={onModalIconClick}>
				<FaTimes />
			</span> : null }
	</>
}

export default ShoppingCartEmpty;