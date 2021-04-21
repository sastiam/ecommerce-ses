import React from 'react';
import { BsPen } from 'react-icons/bs';
import * as Styled from './styles';

const QualificationsEmpty = () => (
	<Styled.Container>
		<Styled.Icon>
			<BsPen />
		</Styled.Icon>
		<Styled.Description>
			No existe ninguna calificacion anterior
		</Styled.Description>
	</Styled.Container>
);

export default QualificationsEmpty;