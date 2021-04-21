import styled, { css } from "styled-components";

interface IPropsBase {
	height? : string,
	position? : 'relative' | 'block' | 'absolute' | 'fixed',
	background? : string,
	center? : boolean
}

const LoadingSpinnerContainer = styled.div<IPropsBase>`	
	width: 100%;
	height: ${({ height })=> height || "100vh"};
	position: ${({ position }) => position || "fixed"};
	top: 0;
	left: 0;
	background: ${({ background }) => background || '#fff'};

	${({ center }) => center && css`
			display : flex;
			justify-content : center;
			align-items : center;
	`}
`;

const DisplayContainer = styled.div`
	display: grid;
	grid-gap: 1.5em;
	justify-items: center;
`;

const ATimeContainerSpinner = 0.1;

const ContainerSpinner = styled.div`
	animation: upgrade ${ATimeContainerSpinner}s linear backwards;

	@keyframes upgrade {
		from{ 
			opacity: 0.3;
			transform: scale(1.2); 
		}

		to{ 
			opacity: 1;
			transform: scale(1); 
		}
	}
`;

const Spinner = styled.div`
	width: 55px;
	height: 55px;
	border: 6px solid var(--color-secondary);
	border-left-color: transparent;
	border-radius: 50%;
	animation: spinner .5s linear infinite;
	animation-delay: ${ATimeContainerSpinner / 2}s;

	@keyframes spinner {
		to{ 
			transform: rotate(1turn); 
		}  
	}
`;

const TextIndicator = styled.span`
	color: rgb(0,0,0,.4);
	font-weight: bold;
	font-size: 15px;
	animation: text .3s linear backwards;
	animation-delay: ${ATimeContainerSpinner}s;

	@keyframes text {
		from{ opacity: 0; }
		to{ opacity: 1 }
	}
`;

export {
	LoadingSpinnerContainer,
	DisplayContainer,
	ContainerSpinner,
	Spinner,
	TextIndicator
}