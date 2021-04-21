import React, { useContext, memo } from "react";
import "./index.scss";

//UI
import GlobalButton from "../../../../common/GlobalButton";

//ParentContext
import { ShoppingCartContext } from "../../../../../context/ShoppingCart";

const DetailCardRight = () => {
	//Context
	const { getTotalPrice , getTotalPriceDiscount } = useContext(ShoppingCartContext);

	//Variables
	const totalPrice = getTotalPrice();
	const totalPriceDiscount = getTotalPriceDiscount();
	const total = totalPrice - totalPriceDiscount;

	return <ul>
		<li className="detail-item">
			<span className="text">Total en el Carrito</span>
			<span className="price">S/ {totalPrice}.00</span>
		</li>
		<li className="detail-item">
			<span className="text">Descuentos aplicados</span>
			<span className="price">- S/ {totalPriceDiscount}.00</span>
		</li>
		<li className="detail-item last">
			<span className="text">Total a pagar</span>
			<span className="price total">S/ {total}.00</span>
		</li>
		<li className="detail-item last">
			<GlobalButton sizeWidth="100%" onClick={() => alert('En proceso...')} >Comprar</GlobalButton>
		</li>
	</ul>
}

export default memo(DetailCardRight);