import styled from "styled-components";

const FullScreenModal = styled.div`
	width: 100%;
	height: 100vh;
	background-color : ${props => props.background};
	position: fixed;
	top: 0;
	left: 0;
	z-index: 11;
	transition: .2s;

	${props => {
		if(props.center)
			return `
				display : flex;
				justify-content : center;
				align-items : center;
			`;
		else
			return "";
	}}

	&.hide {
		opacity : 0;
		visibility : hidden;
	}
`;

export default FullScreenModal;