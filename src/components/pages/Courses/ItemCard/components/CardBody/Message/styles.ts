import styled , { css } from "styled-components";

const StyleBaseIcon = css`
	display: block;
	line-height: 0;
	font-size: 1.2em;
`;

const StyleBaseMessage = css`
	font-size: 15px;
	font-weight: 500;
	margin-left: 10px;
`;

const colorFree = '#0F56BF';
const colorObtains = '#0FBF80';

//Free
const IconFree = styled.span`
	${StyleBaseIcon};
	color: ${colorFree};
`;

const MessageFree = styled.span`
	${StyleBaseMessage};
	color: ${colorFree};
`;

//Obtains
const IconObtains = styled.span`
	${StyleBaseIcon};
	color: ${colorObtains};
`;

const MessageObtains = styled.span`
	${StyleBaseMessage};
	color: ${colorObtains};
`;

//Mentor
const IconMentor = styled.span`
	${StyleBaseIcon};
	color: var(--color-secondary);
`;

const MessageMentor = styled.span`
	${StyleBaseMessage};
	color: var(--color-secondary);
`;

export {
	MessageFree,
	MessageObtains,
	IconFree,
	IconObtains,
	IconMentor,
	MessageMentor
}