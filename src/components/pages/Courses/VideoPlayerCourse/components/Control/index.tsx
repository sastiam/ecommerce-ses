import React, { FC } from "react";
import * as Styled from './styles';
import classnames from 'classnames';

interface IProps {
	fontSize? : number | string;
	active? : boolean;
	onClick?() : void;
}

const Control : FC<IProps> = ({ children, fontSize , onClick , active }) => {
	const classDynamic = classnames({ active });

	return <Styled.Container
		className={classDynamic}
		fontSize={fontSize}
		onClick={onClick}
	>
		{children}
	</Styled.Container>
}

export default Control;