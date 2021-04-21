import React, { FC } from 'react';
import { AiFillHeart } from 'react-icons/ai';

import * as Styled from './styles';
import Icon from '../../Others/Icon';

interface IProps {
	active? : boolean;
	onClick?();
}

const FavoriteIcon : FC<IProps> = ({ active , onClick }) => (
	<Styled.Container>
		<Icon
			active={active}
			onClick={onClick} 
			icon={<AiFillHeart size={20} />}
		/>
	</Styled.Container>
)

export default FavoriteIcon;