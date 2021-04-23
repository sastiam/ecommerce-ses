import React, { FC } from 'react';
import { FiPlayCircle } from 'react-icons/fi';

import * as Styled from './styles';
import Control from '../Control';

interface IProps {
	onClick?() : void;
}


const PlayControl : FC<IProps> = ({ onClick }) => (

	<Styled.Container>
		<Control fontSize="8em" onClick={onClick} >
			<FiPlayCircle />
		</Control>
	</Styled.Container>
);

export default PlayControl;