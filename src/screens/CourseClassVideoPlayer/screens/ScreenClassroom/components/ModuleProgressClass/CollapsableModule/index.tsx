import React, { useRef, memo, useCallback } from 'react'
import { CollapsableSummary } from 'screens/CourseClassVideoPlayer/shared/components/CollapsableList'
import styled from 'styled-components'
import { CardWrapper, CardText } from "../Common/styles"
import { BsChevronDown } from "react-icons/bs"; 
import TextPlaying from '../Common/TextPlaying';

const S = {
	Module : styled(CardWrapper)`
		display:flex;
		margin-top:5px;
		padding:0 16px;
		.detail {
			padding:14px 0;
			display:flex;
			flex-direction:column;
			.name {
				margin-bottom:6px;
			}
		}
		.options {
			padding:14px 0;
			margin-left:auto;
			color:var(--color-bright);
		}
	`,
	Content : styled.div`
		overflow:hidden;
		transition:.2s;
		height:0px;
	`,
	Icon : styled.div<{ open: boolean }>`
		transition: transform 0.3s;
		transform: ${(props) => (props.open ? `rotate(180deg)translate(0%,25%)` : `rotate(0deg)`)};
	`
}


type CollapsableModuleProps = {
	children : React.ReactNode;
	moduleId : string | number;
	name ?: string;
	totalClasses ?: number;
	isPlaying ?: boolean;
	selected ?: boolean;
}
function CollapsableModule({children,moduleId,name,totalClasses,isPlaying,selected}:CollapsableModuleProps) {
	const contentRef = useRef<HTMLDivElement>(null);	
	const onChangeCollapsable = useCallback((open) => {
		if(contentRef.current) contentRef.current.style.height = (open ? contentRef.current.scrollHeight : 0) + 'px';
	},[]);

	return (
		<CollapsableSummary collapsableId={moduleId} selected={selected} onChange={onChangeCollapsable}>
			{({open,onSelect}) => {
				return(
					<div>
						<S.Module onClick={onSelect}>
							<div className="detail">
								<CardText className="name" weight variant={open ? "selected" : "normal"}>{name}</CardText>
								<div className="detail__information">
									<CardText weight fontSize="small" variant="neutral">{totalClasses} clases</CardText>
									<TextPlaying visible={!open && isPlaying} />
								</div>
							</div>
							<div className="options">
								<S.Icon open={open}><BsChevronDown/></S.Icon>
							</div>
						</S.Module>
						<S.Content ref={contentRef}>
								{children}
						</S.Content>
					</div>
				)
			}}
		</CollapsableSummary>
	)
}

export default memo(CollapsableModule);