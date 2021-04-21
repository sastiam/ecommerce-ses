import React, { memo, useContext } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { useLocation , navigate } from "@reach/router";
import * as S from './styles';

import ContentNoAuth from "./ContentNoAuth";
import ContentAuth from "./ContentAuth";
import Icon from "components/common/Icon";
import Dropdown from "components/layouts/Dropdown";

import useResponsive from "hooks/useResponsive";

import { ModalControllerContext } from "context/ModalController";
import { AuthContext } from "context/Auth";

const Actions = () => {
	const { userAuth , loadingAuth } = useContext(AuthContext);
	const { shoppingCartModal, updateStateShoppingCartModal, updateStateSearchModal } = useContext(ModalControllerContext);

	const location = useLocation();
	const { responsive } = useResponsive(1100);
	const pageIsShoppingCart = location.pathname.split("/").includes("shoppingcart");
	
	//Actions
	const onClickSearch = () => updateStateSearchModal(true);
	const onClick = () => {
		if(!responsive){
			updateStateShoppingCartModal(!shoppingCartModal);
			return;
		}

		navigate("/shoppingcart");
	}

	return <S.Container>
		<S.OtherContainer>
			<Icon.AnimatableCircle icon={<AiOutlineSearch />} onClick={onClickSearch} />
		</S.OtherContainer>
		{
			userAuth && (
				<S.ShoppingContainer>
					{ 
						!pageIsShoppingCart && (
							<Icon.AnimatableCircle
								icon={<RiShoppingCartLine />}
								onClick={onClick}
							/> 
						)
					}
					<Dropdown.ShoppingCart />
				</S.ShoppingContainer>
			)
		}
		{ 
			!loadingAuth && (
				!userAuth ? <ContentNoAuth /> : <ContentAuth />
			)
		}
	</S.Container>
}

export default memo(Actions);