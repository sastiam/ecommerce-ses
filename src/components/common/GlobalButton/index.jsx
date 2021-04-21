import styled from "styled-components";

const GlobalButton = styled.button`	
	${props => {
		if(props.sizeWidth) 
			return `
				width : ${props.sizeWidth};
				padding : ${props.paddingVertical ? props.paddingVertical : ".8em"} 0;
			`;
		else
			return `padding : ${props.paddingVertical ? props.paddingVertical : ".8em"} 2em;`;
	}}

	font-size: ${props => props.fontSize ? props.fontSize : "15px" };
	color: ${props => props.ghost ? "var(--color-base)" : "#fff"};
	font-weight: ${props => props.fontWeight ? props.fontWeight : "bold"};
	background-color: ${props => props.ghost ? "#fff" : "var(--color-base)"};
	border: 1px solid var(--color-base);
	border-radius: 20px;
	transition: .3s;

	&:hover {
		background-color: ${props => props.ghost ? "var(--color-base)" : "var(--color-secondary)" };
		border-color: ${props => props.ghost ? "var(--color-base)" : "var(--color-secondary)" };
		color: #fff;
	}

	${props => {
		let styled = "";
		for(let css in props) 
			styled += `${css} : ${props[css]};`;
		return styled; 
	}}
`;

export default GlobalButton;