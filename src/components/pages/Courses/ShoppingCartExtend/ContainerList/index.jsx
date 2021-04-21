import React , { useContext, memo } from "react";
import "./index.scss";

//Components
import Item from "./Item";

//Parent Context
import { ShoppingCartContext } from "../../../../../context/ShoppingCart";


const ContainerList = () => {
	const { shoppingCart } = useContext(ShoppingCartContext);

	return <ul className="container-list-courses">
		{ 
			shoppingCart.reverse().map((v,i) => 
				<Item 
					key={i} 
					id={v.id} 
					sourceImage={v.imagePreview} 
					author={v.mentor} 
					price={v.price} 
					offert={v.offert} 
					title={`Curso de ${v.title}`} 
				/>
			)
		}
	</ul>
}

export default memo(ContainerList);