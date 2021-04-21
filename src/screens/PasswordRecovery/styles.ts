import styled , { keyframes } from "styled-components";

export const Content = styled.div`
	width: 300px;
	margin: 0 auto;
`;

export const FormContainer = styled.form`
	display: grid;
	row-gap: 10px;
`;

export const Button = styled.button`
	width: 100%;
	background-color: var(--color-base);
	padding: 12px 1em;
	border-radius: 10px;
	font-weight: bold;
	color: #fff;
	font-size: 15px;

	&:not(.loading):hover {
		background-color: var(--color-secondary);
	}

	&.loading {
		display: flex;
		justify-content: center;
	}

	&:disabled {
		cursor: initial;
		background-color: rgb(210,210,210);
	}
`;


export const MessageOk = styled.p`
	text-align:center;
	margin:20px 0 40px;
	color:gray;
	font-size:14px;
`

const Rotate = keyframes`
	to {
		transform: rotate(1turn);
	}
`;

export const ButtonSpinner = styled.span`
	width: 18px;
	height: 18px;
	border-radius: 50%;
	border: 2px solid #fff;
	border-bottom: 2px solid transparent;
	animation: ${Rotate} infinite .5s linear;
`;