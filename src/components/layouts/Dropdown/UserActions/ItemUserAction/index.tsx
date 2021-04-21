import React, { FC } from "react";
import * as S from './styles';

type TProps = {
	icon : JSX.Element;
	text : string;
	onClick?() : void;
}

const ItemUserAction : FC<TProps> = ({ icon , text , onClick }) => (
	<S.Container>
		<S.Button onClick={onClick}>
			{ icon }
			<S.ButtonText>{text}</S.ButtonText>
		</S.Button>
	</S.Container>
);

export default ItemUserAction;