import styled from "styled-components";
import { media } from "../../../../styles/responsive";

interface IProps {
	simple : boolean
}

const Card = styled.article<IProps>`
	--padding-general : 1em;

	width: 100%;
	height: max-content;
	border-radius: 25px;
	cursor : ${p => p.simple && 'pointer'};
	background-color: #fff;
	box-shadow : 0 5px 15px rgb(235,235,235);

	@media screen and (max-width: ${media.mediaMobileBig}){ 
		font-size: .9em;
	}
`;

export {
	Card
}