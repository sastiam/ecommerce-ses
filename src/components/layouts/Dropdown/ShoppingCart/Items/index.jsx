import React, { useContext } from "react";
import { useNavigate } from "@reach/router";
import "./index.scss";

//Components
import CartSection from "./CartSection";
import ButtonFooter from "./ButtonFooter";

//Parent Context
import { ShoppingCartContext } from "context/ShoppingCart";

const Items = () => {
	//Hooks
	const navigate = useNavigate();

	//Context
	const { getCoursesLength } = useContext(ShoppingCartContext);

	//Actions
	const onClickViewCart = () => navigate("/shoppingcart", { replace: false })
	const onClickBuy = () => navigate("/buy", { replace: false })

	return <>
		<header className="cart-header">
			<h2 className="title-head">Mi carrito de Compras</h2>
			<p className="subtitle-head">Tienes {getCoursesLength()} cursos en tu carrito</p>
		</header>
		<CartSection />
		<footer className="cart-footer">
			<ButtonFooter title="Ver mi carrito" onClick={onClickViewCart} ghost />
			<ButtonFooter title="Comprar ahora" onClick={onClickBuy} />
		</footer>
	</>
}

export default Items;