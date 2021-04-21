import styled from "styled-components";

interface IProps {
	sizeWidth? : string,
	height? : string,
	minHeight? : string,
	center? : boolean,
	textAlign? : 'center' | 'left' | 'right',
	background? : string,
	paddingVertical? : string,
	paddingHorizontal? : string,
	paddingTop? : string,
	paddingBottom? : string,
	paddingLeft? : string,
	paddingRight? : string
}

const paddingAction = (props : IProps) => {
	let paddingStyles = "";
	const { paddingVertical , paddingHorizontal , paddingTop , paddingBottom , paddingLeft, paddingRight } = props;

	if(paddingVertical) {
		paddingStyles += `
			padding-bottom : ${paddingVertical};
			padding-top : ${paddingVertical};			
		`;
	}else {
		if(paddingBottom) paddingStyles += `padding-bottom : ${paddingBottom};`;
		if(paddingTop) paddingStyles += `padding-top : ${paddingTop};`;
	}

	if(paddingHorizontal) {
		paddingStyles += `
			padding-left : ${paddingHorizontal};
			padding-right : ${paddingHorizontal};			
		`;
	}else {
		if(paddingLeft) paddingStyles += `padding-left : ${paddingLeft};`;
		if(paddingRight) paddingStyles += `padding-right : ${paddingRight};`;
	}

	return paddingStyles;
}


const GlobalDiv = styled.div<IProps>`
	width : ${props => props.sizeWidth ? props.sizeWidth : "100%"};
	height : ${props => props.height};
	min-height : ${props => props.minHeight};
	margin : 0 ${props => props.center ? "auto" : "0"};
	text-align : ${props => props.textAlign ? props.textAlign : "left"};
	background-color : ${props => props.background};

	${props => paddingAction(props)};
`;

export default GlobalDiv;