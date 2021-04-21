import React, { FC } from 'react';
import * as Styled from './styles';
import { IGenericTitle } from '../types';

const GenericTitle : FC<IGenericTitle> = ({ isRight , title }) => (
	<Styled.Container isRight={isRight} >
		<Styled.Text>{title}</Styled.Text>
		<Styled.BottomBarText />
	</Styled.Container>
);

export default GenericTitle;