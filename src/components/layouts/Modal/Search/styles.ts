import styled , { css } from "styled-components";

interface IPropsModalSearch {
	hide : boolean
}

const ModalSearch = styled.div<IPropsModalSearch>`
	width: 100%;
	height: 100vh;
	background-color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	overflow: auto;
	transition: .2s;
	z-index: 10;

	${p => {
		if(p.hide)
			return css`
				opacity: 0;
				visibility: hidden;
				left: -15px;
			` 
	}}

	&::-webkit-scrollbar{
		display: none;
	}
`;

export {
	ModalSearch
}