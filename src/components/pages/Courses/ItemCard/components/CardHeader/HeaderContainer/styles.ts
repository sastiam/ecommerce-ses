import styled, { css } from "styled-components";
import { Flex } from "../../../../../../../styles/mixins";

const CourseHeaderTitle = styled.span`
	display: block;
	color: var(--color-black);
	font-size: 1.25em;
	font-weight: 600;
	padding-right: 1em;
	padding-bottom: 5px;
	cursor: pointer;

	&:hover {
		color: var(--color-secondary);
	}
`;

const CourseHeaderAuthor = styled.span`
	color: rgb(199, 199, 199);
	font-size: 12px;
`;

interface IProps {
	simple : boolean
}

const CourseHeaderContainer = styled.div<IProps>`
	width: 100%;
	height: 120px;
	${Flex('center','flex-start','column')}

	${({ simple }) => simple && css`
		height: auto;

		${CourseHeaderTitle} {
			padding: 1em 0 !important;
			&:hover {
				text-decoration: none;
			}	
		}
	`}
`;

export {
	CourseHeaderAuthor,
	CourseHeaderTitle,
	CourseHeaderContainer
}
