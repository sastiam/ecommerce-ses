import React, { FC } from 'react';
import { navigate } from '@reach/router';
import CardButton from './CardButton';
import { IoMdCart } from 'react-icons/io';
import { ContentFooter } from './styles';
import { IPropsBasicFooter } from '../interface';

const Basic : FC<IPropsBasicFooter> = ({ id , onClick , isShopped }) => {
	const onClickShop = () => navigate('/course/' + id);

	return <ContentFooter>
		<CardButton content={<IoMdCart />} isShopped={isShopped} onClick={onClick} />
		<CardButton content="Comprar Ahora" onClick={onClickShop} />
	</ContentFooter>
}

export default Basic;