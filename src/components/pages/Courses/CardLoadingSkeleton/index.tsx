import React from 'react';
import Skeleton from 'react-loading-skeleton'
import { MainContainer, FooterContainer } from './styles';

const CardLoadingSkeleton = () => {
	return <MainContainer>
		<Skeleton height={220} />
		<Skeleton height={80} />
		<FooterContainer>
			<Skeleton circle={true} width={60} height={60} />
			<Skeleton height={60} />
		</FooterContainer>
	</MainContainer>
}

export default CardLoadingSkeleton;