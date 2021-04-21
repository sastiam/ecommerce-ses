import React, { FC } from 'react';
import { navigate } from '@reach/router';

//Components
import CardButton from './CardButton';
import { ContentFooter } from './styles';
import { IPropsOneItemElement } from '../interface';

const FreeContainer : FC<IPropsOneItemElement> = ({ id }) => {
	const onClick = () => navigate('/course/' + id);

	return <ContentFooter oneItem={true} >
		<CardButton backgroundColor='#0F56BF' content="¡Obtenlo Gratis!" onClick={onClick} />
	</ContentFooter>
}

export default FreeContainer;