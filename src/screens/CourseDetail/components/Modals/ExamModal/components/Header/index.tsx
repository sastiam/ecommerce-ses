import React, { FC, memo } from 'react';
import * as Styled from './styles';

interface IProps {
	courseName : string;
}

const Header : FC<IProps> = ({ courseName }) => (
	<Styled.Container>
		<Styled.Title>Examen Final del {courseName}</Styled.Title>
		<Styled.Description>
			En esta seccion podras realizar el examen para poder obtener el certificado que 
			te brinda el curso tras completarlo.
		</Styled.Description>
	</Styled.Container>
);

export default memo(Header);