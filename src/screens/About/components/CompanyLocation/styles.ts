import styled from "styled-components";
import { media } from "styles/responsive";

export const Wrapper = styled.div`
	 display:flex;	
	 margin-top:6em;
	 align-items:center;
	 justify-content:space-between;
	 .location__image {
		iframe {
			width:100%;
			height:300px;
		}
		width:50%;
	}
	.location__detail {
		width:40%;
		margin-left:auto;
		.location__description {
			text-align:right;
			line-height: 1.3em;
			font-weight: 300;
		}
	}
	@media screen and (max-width:${media.mediaDesktopSmall}) {
		display:block;
		.location__image,.location__detail {
			width:100%;
			margin-bottom:30px;
		}
	}
`