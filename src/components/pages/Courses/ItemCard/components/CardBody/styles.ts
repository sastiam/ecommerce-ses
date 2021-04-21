import styled from "styled-components";
import { Flex } from "../../../../../../styles/mixins";

//Icon
const ContainerStar = styled.div`
	line-height: 0;
	${Flex('flex-start','center')}
`;

const StarIcon = styled.span`
	color: var(--color-star);
	font-size: 1.3em;
`;

const TextIcon = styled.span`
	line-height: normal;
	font-size: .9em;
	color: #4A4A4A;
	padding-left: 5px;
`;

//Prices
const ContainerMessage = styled.div`
	${Flex('flex-start','center')}
`;

const RealPrice = styled.div`
	font-weight: bold;
	font-size: 1.2em;
	color: var(--color-base);
`;

const DiscountPrice = styled.div`
	font-size: .75em;
	color: rgb(230,220,220);
	text-decoration: line-through;
	padding-left: 7px;
`;

//Main
const CardBodyContainer = styled.div`
	width: 100%;
	${Flex('space-between')}
	padding: 1em 1.5em;
`;

export {
	ContainerStar,
	StarIcon,
	TextIcon,
	ContainerMessage,
	RealPrice,
	DiscountPrice,
	CardBodyContainer
}