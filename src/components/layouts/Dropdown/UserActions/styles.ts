import styled from "styled-components";

export const Container = styled.div`
	--top-general : 16px;
	--padding : 2em;
	--top : calc(var(--nav-height) + var(--top-general));

	width: 220px;
	height: auto;
	box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
	position: absolute;
	top: var(--top);
	right: 0;
	background: #fff;
	transition: .3s;
	padding: var(--padding);

	&.hide {
		top: calc(var(--top) - 10px);
		opacity: 0;
		visibility: hidden;
	}
`;

export const ContainerList = styled.section`
	border-bottom: 1px solid rgb(230,230,230);
	padding-bottom: 1em;
`;

export const ContainerButton = styled.div`
	padding-top: var(--padding);
`;

export const Button = styled.footer`
	width: 100%;
	background: var(--color-base);
	padding: 8px;
	border-radius: 5px;
	text-align: center;
	font-size: .9em;
	color: #fff;
	cursor: pointer;
	font-weight: bold;
	transition: .3s;

	&:hover {
		background-color: var(--color-secondary);
	}
`;