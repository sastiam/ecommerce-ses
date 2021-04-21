import styled from "styled-components";

export const ContainerGrid = styled.div`
	display: grid;
	grid-row-gap : 10px;
`;

export const Form = styled.form`
	display: grid;
	row-gap: 12px;
`;

interface IMessageBaseProps {
	display? : 'flex' | 'grid' | 'inline' | 'inline-block' | 'block'
}

export const MessageBase = styled.span<IMessageBaseProps>`
	display: ${({ display }) => display ? display : 'block'};
	text-align: center;
	font-size: 14px;
`;

export const MessageNormal = styled(MessageBase)`
	color: var(--color-black);
	font-weight: 300;
	margin: .5em 0;
`;

export const MessageLink = styled(MessageBase)`
	color: var(--color-secondary);
	cursor: pointer;
	font-weight: 900;
	padding-left: 10px;
`;