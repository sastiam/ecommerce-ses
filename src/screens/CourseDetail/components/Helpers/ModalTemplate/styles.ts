import styled , { keyframes , css } from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	z-index: 99;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.7);
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
`;

const BoxAnimationStart = keyframes`
	from { right: -100%; }
	to { right: 0; }
`;

const BoxAnimationEnd = keyframes`
	from { right: 0; }
	to { right: -100%; }
`;

interface IBoxContent {
	animation? : boolean;
}

export const BoxContent = styled.div<IBoxContent>`
	min-width: 200px;
	height: 100vh;
	background-color: #fff;
	position: relative;
	animation: ${({ animation }) => animation ? BoxAnimationStart : BoxAnimationEnd} .25s linear forwards;
`;

export const DecoratorBar = styled.div`
	width: 100%;
	height: 8px;
	background-color: var(--color-secondary-darken);
`;

export const Icon = styled.span`
	line-height: 0;
	display: inline-block;
`;

export const CloseIcon = styled.div`
	width: 48px;
	height: 48px;
	border-radius: 10px 0 0 10px;
	background-color: var(--color-secondary-darken);
	display: flex;
	justify-content: center;
	align-items:center;
	position: absolute;
	top: 36px;
	left: -48px;
	cursor: pointer;

	&:hover {
		background-color: var(--color-secondary);
	}

	&:active ${Icon} {
		transform: scale(.9);
	}

	@media screen and (max-width : 550px) {
		top: 12px;
		left: initial;
		right: 0;
	}
`;