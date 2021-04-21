import { useContext, useState, useEffect } from 'react';
import { ModalControllerContext } from '../../../../../context/ModalController';
import { AuthContext } from '../../../../../context/Auth';
import { navigate } from '@reach/router';
import { ShoppingCartContext } from '../../../../../context/ShoppingCart';
import { IRequestObtainsCourse } from 'application/metadata/interfaces/User/request';
import { ICourse } from 'application/metadata/interfaces/Course';
import UserRepository from 'application/requests/UserRepository';

const useItemCard = (courseInformation : ICourse , simple : boolean) => {
	const { id , idMentor } = courseInformation;

	//States
	const [ shopped, setShopped ] = useState(false);
	const [ isMentor , setIsMentor ] = useState(false);
	const [ isObtainsCourse , setIsObtains ] = useState(false);

	//Context
	const { userAuth , userAuthInformation } = useContext(AuthContext);
	const { addProduct, existsProduct, shoppingCart, deleteProduct } = useContext(ShoppingCartContext);
	const { updateStatePreviewShoppingCartModal, updatePreviewCourse } = useContext(ModalControllerContext);

	//Actions
	const onClickShop = () => navigate("/course/" + id);
	const onClickSimpleCard = () => simple ? onClickShop() : null;

	const onClickImage = () => {
		updatePreviewCourse({
			modalActive : true,
			information : courseInformation
		});
	}

	const onClickCart = () => {
		if(!userAuth){ 
			navigate("/login");
			return;
		}

		if (!shopped) {
			addProduct(courseInformation);
			setShopped(true);
			updateStatePreviewShoppingCartModal(true);
			return;
		}
			
		deleteProduct(id);
		setShopped(false);			
	}

	const __CheckIsObtains = async () => {
		if(userAuthInformation){
			const { idUser } = userAuthInformation!;

			setIsMentor(() => idMentor === userAuthInformation.idUser);

			const userRepo = new UserRepository();
			const data : IRequestObtainsCourse = {
				idCourse : id,
				idUser
			}

			const isObtains = await userRepo.IsObtainsCourse(data);

			setIsObtains(() => isObtains);
		}
	}
	
	//Effects
	useEffect(() => {
		setShopped(existsProduct(id));
	}, [shoppingCart])

	useEffect(() => {
		__CheckIsObtains();
	},[]);

	return {
		shopped,
		isObtainsCourse,
		isMentor,
		onClickCart,
		onClickImage,
		onClickSimpleCard
	}
}

export default useItemCard;