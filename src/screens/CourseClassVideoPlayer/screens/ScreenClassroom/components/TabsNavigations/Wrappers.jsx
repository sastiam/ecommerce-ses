import { media } from "styles/responsive";
import styled from "styled-components"

export const TabsWrapper = styled.div`
	width:100%;
	display:flex;
	flex-direction:column;
	flex:1;
	overflow:hidden;
`
export const TabsControl = styled.div`
	position: relative;
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	width:100%;
	border-bottom:2px solid gray;
`

export const TabsPreview = styled.div`
	width:100%;
	flex:1;
	overflow-y:auto;
	@media screen and (min-width:${media.mediaTabletBig}) {
		&::-webkit-scrollbar {
			width:8px;
		}
		&::-webkit-scrollbar-thumb {
			background:rgba(200,200,200,.6);
			border-radius:10px;
		}
	}
`