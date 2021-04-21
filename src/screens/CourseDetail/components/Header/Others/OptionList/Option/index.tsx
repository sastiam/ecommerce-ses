import React, { FC, memo } from "react";
import * as Styled from './styles';

interface IProps {
	name : string;
	icon : JSX.Element;
	active? : boolean;
	onClick?() : void;
}

const Option : FC<IProps> = ({ active , icon , name , onClick }) => (
 	<Styled.Container onClick={onClick} active={active}>
		<Styled.Icon>{icon}</Styled.Icon>
		<Styled.Text>{name}</Styled.Text>
	</Styled.Container>
);

export default memo(Option);