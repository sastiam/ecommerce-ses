import { css } from "styled-components";

type FlexAlign = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
type FlexDirection = 'row' | 'column'

const Flex = (
	justifyContent : FlexAlign = 'center',
	alignItems : FlexAlign = 'center',
	direction : FlexDirection = 'row'
) => {
	return css`
		display: flex;
		flex-direction: ${direction};
		justify-content : ${justifyContent};
		align-items : ${alignItems};
	`;
}

export {
	Flex
}