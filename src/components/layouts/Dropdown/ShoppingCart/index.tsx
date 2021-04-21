import React, { useContext, useEffect, useState } from "react";
import classnames from "classnames";
import "./index.scss";

import Items from "./Items";
import ShoppingCartEmpty from "components/pages/Courses/ShoppingCartEmpty";
import TriangleModal from "components/common/TriangleModal";

import { ShoppingCartContext } from "context/ShoppingCart";
import { ModalControllerContext } from "context/ModalController";

const DropdownShoppingCart = () => {
	const [ className , setclassName ] = useState("no-item");
	
	const { shoppingCartModal } = useContext(ModalControllerContext);
	const { shoppingCart } = useContext(ShoppingCartContext);

	useEffect(() => {
		if (shoppingCart.length > 0) setclassName("");
		else setclassName("no-item");
	}, [shoppingCart]);

	const classDynamic = classnames("cart-menu", className,{ hide : !shoppingCartModal });

	return <div className={classDynamic}>
		<TriangleModal />
		{shoppingCart.length > 0 ? <Items /> : <ShoppingCartEmpty />}
	</div>
}

export default DropdownShoppingCart;