import styled , { css } from "styled-components";

interface IProps {
	hover? : boolean,
	display? : 'block' | 'flex' | 'grid' | 'inline' | 'inline-block',
	fontSize? : string,
	fontWeight? : string,
	textAlign? : 'center' | 'left' | 'right',
	styles? : any
}

const TitleBold = styled.span<IProps>`
	width : auto;
	display : ${props => props.display ? props.display : "block"};
	word-wrap: break-word;
	color: ${props => props.color ? props.color : "var(--color-black)"};
	font-size : ${props => props.fontSize ? props.fontSize : "3em"};
	font-weight : ${props => props.fontWeight ? props.fontWeight : "900"};
	text-align : ${props => props.textAlign ? props.textAlign : ""};

	${props => {
		let styled_component = "";
		const { styles } = props;
	
		for(let key in styles)
			styled_component += `${[key]} : ${styles[key]};`;
		
		return styled_component;
	}}

	${props => {
		if(props.hover)
			return css`
				&:hover {
					color: var(--color-secondary);
					cursor: pointer;
				}
			`;
	}}

	&::first-letter {
		text-transform: uppercase;
	}
`;

export default TitleBold;