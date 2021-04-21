import React, { FC, memo } from 'react'
import * as Styled from './styles';

interface IProps {
	message? : string;
}

const IconTooltip : FC<IProps> = ({ message }) => (
	<Styled.Container>
		{message}
	</Styled.Container>
);

export default memo(IconTooltip);
