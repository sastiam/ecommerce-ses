import React, { FC } from "react";
import classnames from 'classnames';
import * as S from './styles';

type TProps = {
	title : string;
	ghost? : boolean;
	onClick?(): void;
}

const ButtonFooter : FC<TProps> = ({ title , ghost , onClick }) => (
	<S.Container
		onClick={onClick}
		className={classnames({ ghost })}
	>
		{title}
	</S.Container>
);

export default ButtonFooter;