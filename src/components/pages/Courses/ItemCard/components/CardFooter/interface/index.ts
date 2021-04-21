interface IPropsBasicFooter {
	id : number,
	isShopped? : boolean,
	onClick() : void
}

interface IPropsOneItemElement {
	id : number
}

export type {
	IPropsOneItemElement,
	IPropsBasicFooter
}