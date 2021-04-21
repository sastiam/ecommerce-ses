import React from 'react'
import { FiCheck } from 'react-icons/fi';
import styled from 'styled-components';

type CompletedProps = {
	completed ?: boolean;
}

const HeightBar = styled.div<{h?:string}>`
	width:2px;
	height:${props => props.h};
	background-color:gray;
`

const Wrapper = styled.div`
	display:inline-flex;
	flex-direction:column;
	height:100%;
	align-items:center;
`
const IconColor = styled.span<CompletedProps>`
	color:${props => props.completed ? "var(--color-secondary-darken)" : "gray"};
	background-color:${props => props.completed && "var(--color-bright)"};
	border:${props => !props.completed && "2px solid gray"};
	flex:none;
	width:20px;
	height:20px;
	align-items:center;
	justify-content:center;
	border-radius:100%;
	display:flex;
`

const CheckCompleted = ({completed}:CompletedProps) => {
	return (
		<Wrapper>
				<HeightBar h="35px" />
				<IconColor completed={completed}>
					<FiCheck size={13} />
				</IconColor>
				<HeightBar h="100%" />
		</Wrapper>
	)
}

export default CheckCompleted
