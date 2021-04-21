import React, { memo, useContext } from "react";
import { navigate, useLocation } from "@reach/router";
import "./index.scss";

//Icons
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

//Parent Context
import { ModalControllerContext } from "context/ModalController";
import { AuthContext } from "context/Auth";

const Responsive = () => {
	const { userAuth } = useContext(AuthContext);
	const { updateStateSlideMenu , updateStateSearchModal } = useContext(ModalControllerContext);

	//Hooks
	const location = useLocation();

	const isShopping = location.pathname.split("/").includes("shoppingcart");

	//Actions
	const onClickBars = () => updateStateSlideMenu(true);
	const onClickSearch = () => updateStateSearchModal(true);
	const onClickShopping = () => !isShopping ? navigate("/shoppingcart") : false;
	const onClickFavorites = () => navigate("/panel/favorites");

	return <div className="items">
		<span className="icons left">
			<span onClick={onClickBars} className="option" data-cy="button-option-sidebar"><FaBars /></span>
			<span  onClick={onClickSearch} className="option spacing"><AiOutlineSearch /></span>
		</span>
		<span className="icons right">
			{ userAuth && <>
					<span className="option" onClick={onClickFavorites}>
						<AiOutlineHeart />
					</span> 
					<span className="option" onClick={onClickShopping}>
						<RiShoppingCartLine color={!isShopping ? '#000' : "var(--color-base)"} />
					</span>
				</>
			}
		</span>
	</div>
}

export default memo(Responsive);