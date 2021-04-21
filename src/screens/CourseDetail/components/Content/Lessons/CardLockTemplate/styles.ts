import styled, { css } from "styled-components";

interface IContainerProps {
	lock? : boolean;
	unlockColor? : string;
}

export const Container = styled.div<IContainerProps>`
	width: 100%;
	height: 60px;
	border: 1px solid #e6e6e6;
	padding: 0 2em;
	margin-bottom: 15px;
	user-select: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;

	${({ lock , unlockColor }) => 
		lock ? 
			css`
				color: #8a8a8a;
				cursor: initial;
			` :
			css`
				color: ${unlockColor || '#000'};
				&:hover {
					border-color: ${unlockColor || '#000'};
				}
			`
	}
`;

export const TextContainer = styled.div`
	display: flex;
`;

export const Icon = styled.span`
	display: inline-block;
	line-height: 0;
	font-size: 1.5em;
`;

export const Title = styled.span`
	margin-left: 8px;
	font-weight: bold;
`;