import React, { Fragment } from "react";

//Components
import MainLayout from "components/layouts/MainLayout";
import { useContext } from "react";
import { ShoppingCartContext } from "context/ShoppingCart";
import ShoppingCartExtend from "components/pages/Courses/ShoppingCartExtend";
import FooterDetail from "components/layouts/FooterDetail";
import Navigation from "components/layouts/Navigation";
import ShoppingCartEmptyPage from "./ShoppingCartEmptyPage";

const ShoppingCart = () => {
	//Context
	const { loadingShoppingCart , shoppingCart } = useContext(ShoppingCartContext);
	
	if(loadingShoppingCart) return <Fragment />

	return <MainLayout titlePage="Tu carrito de Compras">
		<Navigation.Normal />
		{ shoppingCart.length ? <ShoppingCartExtend /> : <ShoppingCartEmptyPage /> }
		<FooterDetail />
	</MainLayout>
}

export default ShoppingCart;