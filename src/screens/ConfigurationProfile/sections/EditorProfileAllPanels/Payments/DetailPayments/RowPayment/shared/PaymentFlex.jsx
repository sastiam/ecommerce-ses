import styled from "styled-components";

export default styled.div`
width: ${props => props.widthActive ? "80px" : "auto"};
display: flex;
align-items: ${(props) => props.align};
justify-content: ${(props) => props.justify};
flex-direction: ${(props) => props.flexDirection};
width: ${(props) => props.width};
height: ${(props) => props.height};
flex: ${(props) => props.flex};
border-left: ${(props) => props.borderLeft};
border-right: ${(props) => props.borderRight};
margin: ${(props) => props.margin};

@media screen and (max-width : 600px){
	width: ${props => props.widthActive && "auto"};
	margin-bottom: ${props => props.marginBottomResponsive};
	padding:0;
}

${props => {
	if(props.hoverable){
		return `
			padding: 0 1em;
			&:hover {
				background: rgb(250,250,250);
			}
		`;
	}
}}

`;