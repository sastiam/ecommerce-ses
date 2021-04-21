import React, { FC } from "react";

import { Button } from './styles'

interface IProps {
	content : string | JSX.Element,
	isShopped? : boolean,
	onClick?() : void,
	backgroundColor?:  string
}

const CardButton : FC<IProps> = ({ content, onClick, isShopped , backgroundColor }) => {
	return <Button 
		backgroundColor={backgroundColor} 
		isShopped={isShopped!}
		onClick={onClick}
	>
		{content}
	</Button>
}

CardButton.defaultProps = {
	isShopped : false
}

export default CardButton;