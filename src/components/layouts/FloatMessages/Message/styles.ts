import styled , { keyframes } from "styled-components";

export const AnimationStart = keyframes`
	from {
		opacity: 0;
		transform: translateX(10px);
	}

	to {
		opacity: 1;
		transform: translateX(0);
	}
`;

export const AnimationEnd = keyframes`
	from {
		opacity: 1;
		transform: translateX(0);
	}

	to {
		opacity: 0;
		transform: translateX(10px);
	}
`;

export const Container = styled.div`
	width: 100%;
	padding: 8px 1em;
	margin-top: 5px;
	border-radius: 5px;
	background-color: #E7001C;
	display: flex;
	align-items: center;
	user-select: none;

	&.animated {
		animation: ${AnimationStart} .3s linear forwards;
	}

	&.deleted {
		animation: ${AnimationEnd} .3s linear forwards;
	}
`;

export const Text = styled.span`
	color: #fff;
	font-weight: bold;
	font-size: 12px;
`;

export const Icon = styled.span`
	line-height: 0;
	color: #fff;
	margin-right: 8px;
`;