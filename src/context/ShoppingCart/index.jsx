import React, { createContext, useState, useEffect } from "react";

//Context
const ShoppingCartContext = createContext();
const ShoppingCartProvider = props => {
	/**PROPS**/
	const { children } = props;

	/**STATES**/
	const [ shoppingCart, setShoppingCart ] = useState([]);
	const [ loadingShoppingCart, setloadingShoppingCart ] = useState(true);

	/**ACTIONS**/

	//- Agregar el Producto
	const addProduct = (payload) => {
		let newItem = [...shoppingCart];
		newItem.push(payload);

		setShoppingCart(newItem);
		sessionStorage.setItem("shoppingCart", JSON.stringify(newItem));
	}

	//- Eliminar el Producto
	const deleteProduct = (id) => {
		const itemsCart = [...shoppingCart];
		const newItemsCart = itemsCart.filter(v => v.id !== id);

		setShoppingCart(newItemsCart);
		sessionStorage.setItem("shoppingCart", JSON.stringify(newItemsCart));
	}

	//- Verificar Existencia del Producto
	const existsProduct = (id) => {
		for (let course of shoppingCart) {
			if (course.id === id) return true;
		}

		return false;
	}

	// - Obtener la cantidad de cursos del carrito
	const getCoursesLength = () => shoppingCart.length;

	// - Obtener Precio Total sin Descuento
	const getTotalPrice = () => {
		if(shoppingCart.length) {
			let totalPrice = 0;
			for(let item of shoppingCart) totalPrice += item.price;
			return totalPrice;
		}
	}

	// - Obtener Precio Total con Descuento
	const getTotalPriceDiscount = () => {
		if(shoppingCart.length){
			let totalPrice = 0;
		
			for(let item of shoppingCart){
				if(item.offert) totalPrice += Math.round(item.price * item.offert);
			}

			return totalPrice;
		}
	}

	/**EFFECTS**/
	useEffect(() => {
		const cart = sessionStorage.getItem("shoppingCart");
		if (cart) {
			setShoppingCart(JSON.parse(cart));
		}
		setloadingShoppingCart(false);
	}, []);

	return <ShoppingCartContext.Provider value={{
		shoppingCart,
		loadingShoppingCart,
		addProduct,
		existsProduct,
		deleteProduct,
		getTotalPrice,
		getCoursesLength,
		getTotalPriceDiscount
	}}>
		{children}
	</ShoppingCartContext.Provider>
}

export {
	ShoppingCartContext,
	ShoppingCartProvider
}