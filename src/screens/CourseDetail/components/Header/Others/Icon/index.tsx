import React, { FC, memo } from "react";
import * as Styled from './styles';

interface IProps {
	text? : string;
	icon : JSX.Element;
	active? : boolean;
	onClick?() : void;
}

const Icon : FC<IProps> = ({ text, icon, onClick, active }) => (
	<Styled.Container active={active} onClick={onClick}>
		<Styled.Icon>{icon}</Styled.Icon>
		{ text && <Styled.Text>{text}</Styled.Text> }
	</Styled.Container>
);

export default memo(Icon);
