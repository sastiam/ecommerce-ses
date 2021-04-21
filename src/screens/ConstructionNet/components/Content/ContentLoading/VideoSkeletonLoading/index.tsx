import React from 'react';
import { ContainerCardLoading } from './styles';
import Skeleton from 'react-loading-skeleton';

const CardTutorialLoading = () => {
	return <ContainerCardLoading>
		<Skeleton height={240} />
		<Skeleton height={60} />
	</ContainerCardLoading>
}

export default CardTutorialLoading;