import React, { FC } from "react";
import { ButtonAuthStyles } from './styles';

interface IProps {
	title : string;
	ghost? : boolean;
	onClick?() : void;
}

const ButtonAuth : FC<IProps> = ({ title , ghost , onClick }) => (
	<ButtonAuthStyles onClick={onClick} ghost={ghost}>
		{title}
	</ButtonAuthStyles>
)

export default ButtonAuth;