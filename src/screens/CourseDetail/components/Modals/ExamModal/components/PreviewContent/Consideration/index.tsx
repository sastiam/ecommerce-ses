import React, { FC } from 'react';
import * as Styled from './styles';

interface IProps {
	text : string;
}

const Consideration : FC<IProps> = ({ text }) => (
	<Styled.Container>
		<Styled.Circle />
		<Styled.Text>{text}</Styled.Text>
	</Styled.Container>
);

export default Consideration;