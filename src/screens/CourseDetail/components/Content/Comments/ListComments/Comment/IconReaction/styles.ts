import styled, { css } from "styled-components";

interface IPropsIconReaction {
	setSpacing? : boolean,
	isActive? : boolean,
	isLock? : boolean,
}

const ContainerIconReaction = styled.span<IPropsIconReaction>`
	line-height: 0;
	display: flex;
	align-items: center;
	font-size: 1.2em;
	cursor: pointer;
	color: var(--color-light);

	${({ isActive }) => isActive && css`
		color: var(--color-secondary);
	`}

	${({ setSpacing }) => setSpacing && css`
		margin-left: 1em;
	`}

	${({ isLock }) => isLock && css`
		cursor: initial;
		color: var(--color-light);
	`}

	${({ isLock }) => !isLock && css`
		&:hover {
			color: var(--color-secondary);
		}
	`}
`;

const Amount = styled.span`
	line-height: normal;
	font-size: 15px;
	padding-left: 3px;
`;

export {
	ContainerIconReaction,
	Amount
}