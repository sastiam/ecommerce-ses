import React, { FC, memo } from 'react';
import * as Styled from './styles';

interface IProps {
	number : number;
	value : number;
	createdAt : string;
}

const Qualification : FC<IProps> = ({ value , number, createdAt }) => {
	const date = new Date(createdAt);
	const date_option = { year :'numeric', month : 'long' , weekday : 'long' , day : 'numeric' };
	
	const SetColorValue = () => {
		if(value > 10 && value < 16) return "var(--color-base)";
		else if(value > 15 && value < 21) return "#0FBF80";
		
		return "#CF2B07";
	}

	return <Styled.Container>
		<Styled.TextContent>
			<Styled.Title>Intento {number}</Styled.Title>
			<Styled.Date>{date.toLocaleDateString('es-ES', date_option)}</Styled.Date>
		</Styled.TextContent>
		<Styled.ValueContainer color={SetColorValue()} >
			<Styled.Text>{value.toFixed(1)}</Styled.Text>
		</Styled.ValueContainer>
	</Styled.Container>
};

export default memo(Qualification);