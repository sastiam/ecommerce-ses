import React from 'react';

//Components
import Basic from "./UI/Basic";
import Free from "./UI/Free";
import Obtains from "./UI/Obtains";
import Mentor from './UI/Mentor';

//Interfaces
import { IPropsBasicFooter, IPropsOneItemElement } from "./interface";

const CardFooter = {
	Basic : (props : IPropsBasicFooter) => <Basic {...props} />,
	Free : (props : IPropsOneItemElement) => <Free {...props} />,
	Obtains : (props : IPropsOneItemElement) => <Obtains {...props} />,
	Mentor : (props : IPropsOneItemElement) => <Mentor {...props} />
}

export default CardFooter;