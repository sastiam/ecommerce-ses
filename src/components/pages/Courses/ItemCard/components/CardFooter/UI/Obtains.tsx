import React, { FC } from 'react';
import { useNavigate } from '@reach/router';
import CardButton from './CardButton';
import { ContentFooter } from './styles';
import { IPropsOneItemElement } from '../interface';

const Obtains : FC<IPropsOneItemElement> = ({ id  }) => {
	//Hooks
	const navigate = useNavigate();

	//Actions
	const onClickShop = () => navigate('/course/' + id);

	return <ContentFooter oneItem={true} >
		<CardButton backgroundColor='#0FBF80' content="Ver Curso" onClick={onClickShop} />
	</ContentFooter>
}

export default Obtains;