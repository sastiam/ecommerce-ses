import React, { useContext } from "react";
import { useLocation } from "@reach/router";
import { BsTrash } from "react-icons/bs";
import "./index.scss";

//Components
import TitleBold from "../../../../../common/TitleBold";
import GlobalDiv from "../../../../../common/GlobalDiv";
import useDiscount from "../../../../../../hooks/useDiscount";

//Parent Context
import { ShoppingCartContext } from "../../../../../../context/ShoppingCart";

const Item = props => {
	//Props
	const { id , title , author, price , offert , sourceImage } = props;

	//Hooks
	const { realPrice , priceDiscount } = useDiscount(price,offert);
	const { pathname } = useLocation();

	//Variables
	let isScreenCourse = pathname.split("/").includes("course");

	//Actions
	const { deleteProduct } = useContext(ShoppingCartContext);

	return <li className="item-cart">
		<div className="image-course">
			<img className="img" src={sourceImage} alt="course"/>
		</div>
		<div className="information-course">
			<div className="information">
				<TitleBold fontSize="15px" fontWeight="600">{title}</TitleBold>
				<span className="tutor-name">{author}</span>							
			</div>
			<GlobalDiv paddingTop="1em">
				{
					offert ?
						<>
							<span className="price">S/ {priceDiscount}</span>
							<span className="price real">S/ {realPrice}</span>
						</> :
						<span className="price">S/ {realPrice}</span>
				}
			</GlobalDiv>
			{
				!isScreenCourse ? <div className="icon-trash" onClick={() => deleteProduct(id)}>
					<span className="delete">Eliminar</span>
					<BsTrash size={20} />
				</div> : null
			}
		</div>
	</li>
}

export default Item;