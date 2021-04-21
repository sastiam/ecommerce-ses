import React , { useContext, memo } from "react";
import classnames from "classnames";
import * as S from './styles';

import { BsPerson } from "react-icons/bs";
import { TiCogOutline } from "react-icons/ti";
import { GoSignOut } from "react-icons/go";
import { navigate } from "@reach/router";

import ItemUserAction from "./ItemUserAction";
import TriangleModal from "components/common/TriangleModal";

import { AuthContext } from "context/Auth";
import { ModalControllerContext } from "context/ModalController";

import useNavigateToSearch from "hooks/useNavigateToSearch";

const DropdownUserActions = () => {
	const { onCloseSession , userAuthInformation } = useContext(AuthContext);
	const { dropdownNavigationBar } = useContext(ModalControllerContext);
	
	const searchNavigate = useNavigateToSearch();
	const navigateTo = (path : string) => () => navigate(path);

	return <S.Container className={classnames({ hide : !dropdownNavigationBar })}>		
		<TriangleModal />
		<S.ContainerList>
			<ul>
				<ItemUserAction
					icon={<BsPerson/>}
					text="Ver perfil"
					onClick={navigateTo(`/users/${userAuthInformation?.idUser}`)}
				/>
				<ItemUserAction
					icon={<TiCogOutline/>} 
					text="Configuración"
					onClick={navigateTo('/configuration')} 
				/>
				<ItemUserAction
					icon={<GoSignOut />}
					text="Cerrar sesión"
					onClick={onCloseSession} 
				/>
			</ul>			
		</S.ContainerList>
		<S.ContainerButton>
			<S.Button onClick={searchNavigate}>Ver otros Cursos</S.Button>
		</S.ContainerButton>
	</S.Container>
}

export default memo(DropdownUserActions);