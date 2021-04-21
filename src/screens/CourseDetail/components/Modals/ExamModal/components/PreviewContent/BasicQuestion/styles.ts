import styled, { css } from "styled-components";

export const Container = styled.div`
	width: 50%;
	max-width: 400px;
	height: 42px;
	display: flex;
	justify-content: space-between;
	background-color: #E8E8E8;
	border-radius: 10px;
	overflow: hidden;
	margin-bottom: 5px;

	@media screen and (max-width: 480px) {
		width: 75%;
	}
`;

const TextStyles = css`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Roboto' , sans-serif;
`;

export const LeftContent = styled.div`
	width: 200px;
	font-size: 1em;
	text-transform: uppercase;
	background-color: #D8D5D5;
	font-weight: 900;
	color: #313131;

	${TextStyles};
`;

export const RightContent = styled.div`
	min-width: 100px;
	font-weight: 300;
	font-size: .9em;
	color: #676767;
	${TextStyles}
`;