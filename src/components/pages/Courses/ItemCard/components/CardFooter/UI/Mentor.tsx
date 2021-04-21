import React, { FC } from 'react';
import { navigate } from '@reach/router';
import CardButton from './CardButton';
import { ContentFooter } from './styles';
import { IPropsOneItemElement } from '../interface';

const Mentor : FC<IPropsOneItemElement> = ({ id }) => {
	const onClickShop = () => navigate('/course/' + id);

	return <ContentFooter oneItem={true} >
		<CardButton backgroundColor='#0f43b3' content="Ver Curso" onClick={onClickShop} />
	</ContentFooter>
}

export default Mentor;