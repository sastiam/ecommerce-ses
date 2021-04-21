import React, { FC } from 'react';
import * as Styled from './styles';

interface IProps {
	number : number;
	point : number;
}

const BasicQuestion : FC<IProps> = ({ number, point }) => (
	<Styled.Container>
		<Styled.LeftContent>
			Pregunta {number}
		</Styled.LeftContent>
		<Styled.RightContent>{point.toFixed(1)} puntos</Styled.RightContent>
	</Styled.Container>
);

export default BasicQuestion;