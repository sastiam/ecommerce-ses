import styled from "styled-components";
import { IComponentInformation } from '../types';

export const Text = styled.span`
	color: var(--color-dark);
	font-weight: 900;
	font-size: 1.8em;
`;

export const BottomBarText = styled.div`
	width: 80px;
	height: 6px;
	background-color: var(--color-base);
`;

export const Container = styled.div<IComponentInformation>`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items : ${({ isRight }) => isRight ? 'flex-end' : 'flex-start'};
	margin-bottom: 1.5em;
`;