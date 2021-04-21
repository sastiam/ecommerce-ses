import React , { useContext, memo } from "react";
import { FaTimes } from "react-icons/fa";
import classnames from "classnames";
import "./index.scss";

//Components
import ContainerList from "./ContainerList";

//Utility
import TitleBold from "../../../common/TitleBold";
import GlobalDiv from "../../../common/GlobalDiv";

//Parent Context
import { ShoppingCartContext } from "../../../../context/ShoppingCart";
import { ModalControllerContext } from "../../../../context/ModalController";
import DetailCardRight from "./DetailCardRight";

const ShoppingCartExtend = ({ modal }) => {
	//Context
	const { getCoursesLength } = useContext(ShoppingCartContext);
	const { updateStatePreviewShoppingCartModal } = useContext(ModalControllerContext);
	
	//Actions
	const onClickClose = () => updateStatePreviewShoppingCartModal(false);

	//Dynamic Styles
	const classDynamic = classnames("shopping-cart-extend",{ modal : modal ? true : false });

	return <GlobalDiv paddingVertical="4em" paddingHorizontal="3em" center className={classDynamic}>
		<div className="row-courses">
			<GlobalDiv paddingBottom="2em" paddingHorizontal="1em" className="head-courses">
				<TitleBold fontSize="1.3em">Tu carrito de compras</TitleBold>
				<span className="small-text">Tienes {getCoursesLength()} items en tu carrito</span>
			</GlobalDiv>
			<section>
				<ContainerList />				
			</section>
		</div>
		<div className="row-prices">
			<div className="card-detail">
				<div>
					<TitleBold fontSize="1.8em">Resumen</TitleBold>
				</div>
				<GlobalDiv paddingTop="1em">
					<DetailCardRight />
				</GlobalDiv>
			</div>
		</div>
		{ modal ? <div className="icon-close" onClick={onClickClose}>
				<FaTimes />
			</div> : null }
	</GlobalDiv>
}

export default memo(ShoppingCartExtend);