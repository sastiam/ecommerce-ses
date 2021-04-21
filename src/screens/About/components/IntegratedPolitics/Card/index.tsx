import React, { FC } from 'react';
import * as Styled from './styles';

interface IProps {
	text : string;
}

const Card : FC<IProps> = ({ text }) => (
	<Styled.Container>
		<Styled.Text>{text}</Styled.Text>
	</Styled.Container>
);

export default Card;