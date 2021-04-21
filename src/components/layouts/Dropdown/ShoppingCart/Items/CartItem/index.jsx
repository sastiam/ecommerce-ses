import React, { useContext, useCallback } from "react";
import { FiTrash2 } from "react-icons/fi";
import "./index.scss";

//Context
import { ShoppingCartContext } from "context/ShoppingCart";

//Hooks
import useDiscount from "hooks/useDiscount";

const CartItem = ({ course }) => {
	const { id, imagePreview, title, mentor, price, offert } = course;

	//Context
	const { deleteProduct } = useContext(ShoppingCartContext);
	const { realPrice, priceDiscount } = useDiscount(price, offert);

	//Actions
	const onClick = useCallback(() => deleteProduct(id),[id]);

	return <article className="cart-item">
		<div className="image">
			<img src={imagePreview} className="image-item" alt="course-alt" />
		</div>
		<div className="cart-container">
			<div className="text">
				<div className="information">
					<p className="title">Curso de {title}</p>
					<p className="author">Por {mentor}</p>
				</div>
				<div className="price">
					{
						offert ?
							<>
								<p className="real-price">S/{priceDiscount}</p>
								<p className="discount-price">S/{realPrice}</p>
							</>
							: <p className="real-price">S/{realPrice}</p>
					}
				</div>
			</div>
			<div className="trash-button">
				<button className="trash-icon" onClick={onClick}>
					<FiTrash2 />
					<span className="text">Eliminar</span>
				</button>
			</div>
		</div>
	</article>
}

export default CartItem;