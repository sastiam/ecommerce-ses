import styled, { css } from "styled-components";


interface CardWrapperProps {
	selected ?: boolean;
	hover ?: boolean;
	margin ?: string;
}
export const CardWrapper = styled.div<CardWrapperProps>`
	transition: background 0.2s;
	margin: ${(props) => props.margin};
	background-color:var(--color-base-dark-medium);
	cursor:pointer;
	${props => (props.selected) && css`
			background-color:var(--color-base-light);
	`}
	${props => (props.hover && !props.selected) && css`
	   &:Hover {
			 background-color:var(--color-base-dark-deep);
		 }
	`}
` 

interface CardTextProps {
	fontSize ?: "normal" | "medium" | "small";
	variant ?: "neutral" | "selected" | "normal";
	uppercase ?: boolean;
	weight ?: boolean;
}
export const CardText = styled.span<CardTextProps>`
	display:inline-block;
	font-size:${props => ({
		normal : "1.1em",
		medium : ".9em",
		small: ".8em"
	}[props.fontSize || "normal"])};
	color:${props => ({
		normal : "white",
		selected : "var(--color-bright)",
		neutral: "silver"
	}[props.variant || "normal"])};
	text-transform:${props => props.uppercase && 'uppercase'};
	font-weight:${props => props.weight && "bold"};
`

export const LineProgressVertical = styled.div`
	width:2px;
	background-color:gray;
	margin:0 15px 0 0;
`