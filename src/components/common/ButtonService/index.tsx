import React, { FC } from "react";
import * as S from './styles';

type TProps = {
	text : string;
	ghost? : boolean;
	onClick?() : void;
}

const ButtonService : FC<TProps> = ({ children , text , ghost , onClick }) => (
	<S.Container ghost={ghost} onClick={onClick}>
		<S.IconContent>
			{children}
		</S.IconContent>
		<S.ButtonText ghost={ghost}>{text}</S.ButtonText>
	</S.Container>
);

export default ButtonService;