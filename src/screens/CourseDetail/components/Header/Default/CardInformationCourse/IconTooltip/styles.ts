import styled , { keyframes } from "styled-components";

const AnimationFadeShake = keyframes`
	0% {
		transform: translateY(-100px);
	}
	50% {
		opacity: .5;
		transform: rotate(10deg);
	}
`;

export const Container = styled.div`
	color: white;
	background-color: rgba(0,0,0,.8);
	position: absolute;
	border-radius: 5px;
	padding: 10px;
	animation: ${AnimationFadeShake} .3s 1 ease-in-out;
	bottom: -100px;
	z-index: 100px;
`;