import styled , { css } from "styled-components";


interface IProps {
	oneItem? : boolean
}

const ContentFooter = styled.div<IProps>`
	width: 100%;
	display: grid;
	grid-template-columns: 46px 4fr;
	grid-gap: 15px;
	align-content: center;
	padding: 1.5em;
	border-top: 1px solid #EEEEEE;

	${({ oneItem }) => oneItem && css`
		grid-template-columns: 1fr;
	`}
`;

export {
	ContentFooter
}