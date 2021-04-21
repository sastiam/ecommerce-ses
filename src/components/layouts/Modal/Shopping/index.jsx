import React , { useContext } from "react";
import classnames from "classnames";
import "./index.scss";

//Components
import ShoppingCartExtend from "components/pages/Courses/ShoppingCartExtend";
import ShoppingCartEmpty from "components/pages/Courses/ShoppingCartEmpty";

//Context
import { ModalControllerContext } from "context/ModalController";
import { ShoppingCartContext } from "context/ShoppingCart";

const Shopping = () => {
	//Context
	const { previewShoppingCartModal , updateStatePreviewShoppingCartModal } = useContext(ModalControllerContext);
	const { shoppingCart } = useContext(ShoppingCartContext);

	//Dynamic Styles
	const classDynamic = classnames("dark-theme",{ hide : !previewShoppingCartModal });

	//Actions
	const onClick = () => updateStatePreviewShoppingCartModal(false);

  return <div className={classDynamic}>
		{ shoppingCart.length > 0 ? <ShoppingCartExtend modal onClick={onClick} /> : <ShoppingCartEmpty modal={true} onModalIconClick={onClick} /> }
	</div>
}

export default Shopping;