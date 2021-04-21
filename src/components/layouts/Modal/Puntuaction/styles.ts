import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: rgba(0,0,0,.8);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	transition: .3s;
	display: flex;
	justify-content: center;
	align-items: center;

	&.hide {
		visibility: hidden;
		opacity: 0;
	}
`;