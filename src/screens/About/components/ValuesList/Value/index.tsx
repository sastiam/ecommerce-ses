import React, { FC } from 'react';
import * as Styled from './styles';

interface IProps {
	image : string;
	title : string;
	description : string;
}

const Value : FC<IProps> = ({ image , title, description }) => (
	<Styled.Container>
		<Styled.ImageContainer>
			{ image && <Styled.Image src={image} alt={title} /> }
		</Styled.ImageContainer>
		<Styled.ContainerTitle>
			<Styled.Title>{title}</Styled.Title>
		</Styled.ContainerTitle>
		<Styled.Description>{description}</Styled.Description>
	</Styled.Container>
);

export default Value;