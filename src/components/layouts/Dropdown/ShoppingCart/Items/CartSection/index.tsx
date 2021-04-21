import React , { useContext } from "react";
import * as S from './styles';

//Components
import CartItem from "../CartItem";

//Context
import { ShoppingCartContext } from "context/ShoppingCart";

const CartSection = () => {
	const { shoppingCart } = useContext(ShoppingCartContext);
	
	return <S.Container>
		{ shoppingCart?.map((v,i) => <CartItem key={i} course={v} /> ) }
	</S.Container>
}

export default CartSection;