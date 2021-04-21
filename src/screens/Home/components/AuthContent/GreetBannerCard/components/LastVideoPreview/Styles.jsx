import styled from "styled-components";

export const PanelPreviewInformation = styled.div`
	position : absolute;
	left : 0;
	right : 0;
	bottom : 0;
	top : 0;
	background : rgba(0,0,0,.6);
	display : flex;
	flex-direction : column;
	padding : 20px;
`

export const PanelFlex = styled.div`
	display : flex;
	align-items:${props => props.alignItems};
	justify-content: ${props => props.justify || 'space-between'};
	margin: ${props => props.margin};
`