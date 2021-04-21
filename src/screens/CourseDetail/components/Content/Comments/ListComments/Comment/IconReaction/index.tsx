import React, { memo, FC } from "react";
import { ContainerIconReaction, Amount } from "./styles";

interface IProps {
	amount : number,
	icon : JSX.Element,
	setSpacing? : boolean,
	isActive : boolean,
	isLock : boolean,
	onClick() : void,
}

const IconReaction : FC<IProps> = ({ amount , icon , setSpacing , isActive, isLock, onClick }) => {
	return <ContainerIconReaction 
		isActive={isActive}
		setSpacing={setSpacing}
		isLock={isLock}
		onClick={!isLock ? onClick : () => null}
	>
		{icon}
		<Amount>{amount}</Amount>
	</ContainerIconReaction>
}

export default memo(IconReaction);