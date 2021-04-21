import React, { FC } from 'react';
import InformationTitle from '../../GenericTitle';
import { IGenericTitle } from '../../types';
import * as Styled from './styles';

interface IProps extends IGenericTitle {
	description : string;
	image : string;
}

const InformationCard : FC<IProps> = ({ title , isRight , description , image }) => (
	<Styled.Container isRight={isRight} >
		<Styled.TextContainer>
			<InformationTitle title={title} isRight={isRight} />
			<Styled.Description>{description}</Styled.Description>
		</Styled.TextContainer>
		<Styled.ImageContainer>
			{ image && <Styled.Image src={image} /> }
		</Styled.ImageContainer>
	</Styled.Container>
);

export default InformationCard;