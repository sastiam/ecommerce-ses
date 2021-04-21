import React, { memo, useContext, useState } from "react";
import { ButtonMentor } from './styles';
import { AuthContext } from "context/Auth";
import { ModalControllerContext } from "context/ModalController";
import { ShoppingCartContext } from "context/ShoppingCart";
import useBuyCourse from "hooks/useBuyCourse";
import GlobalButton from "components/common/GlobalButton";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";
import { navigate } from "@reach/router";

const ActionsButtons = () => {
	//Context
	const { addProduct , existsProduct , deleteProduct } = useContext(ShoppingCartContext);
	const { updateStatePreviewShoppingCartModal } = useContext(ModalControllerContext);
	const { userAuth , userAuthInformation } = useContext(AuthContext);

	//Hooks
	const buyCourse = useBuyCourse();
	const { course : { data }, user : { isMentor } } = useCourseDetailRedux();
	const  { id , free } = data;

	//States
	const [ isStore , setIsStore ] = useState(existsProduct(id));

	//Actions
	const onClickCart = () => {
		if(!userAuth){
			navigate("/login");
			return;
		}

		if (!isStore) {
			addProduct(data);
			setIsStore(true);
			updateStatePreviewShoppingCartModal(true);
			return;
		}
		
		deleteProduct(id);
		setIsStore(false);
	}

	const onClickBuyCourse = async () => {
		if(!userAuth){
			navigate("/login");
			return;
		}

		const payload = {
			idUser : userAuthInformation.idUser,
			idCourse : id
		}
		
		await buyCourse(payload);
	}

	if(isMentor){
		return <ButtonMentor>Bienvenido Profesor</ButtonMentor>
	}else if(free){
		return <GlobalButton onClick={onClickBuyCourse} fontWeight="900" sizeWidth="100%">Obtenlo Gratis</GlobalButton>
	}else{
		return <>
			<GlobalButton onClick={onClickBuyCourse} fontWeight="900" sizeWidth="100%">Compralo Ahora</GlobalButton>
			<GlobalButton onClick={onClickCart}  ghost fontWeight="900" sizeWidth="100%" >
				{ isStore ? "Quitar de mi carrito" : "Agregar a mi Carrito" }
			</GlobalButton>			
		</>		
	}
}

export default memo(ActionsButtons);