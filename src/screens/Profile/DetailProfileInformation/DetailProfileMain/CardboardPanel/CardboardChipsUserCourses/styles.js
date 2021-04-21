import styled from "styled-components";
import styles from "styles/index.scss";

export const Title = styled.span`
	font-size: 1.2em;
	font-weight: bold;
	display: block;
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const ContainerChipsCourses = styled.div`
	padding : 10px 0;
`;

export const ChipCourse = styled.div`
	color: var(--color-light);
	font-size: 11px;
	border: 1px solid rgba(80, 80, 80, 0.1);
	padding: 10px;
	margin-right: 10px;
	margin-bottom: 10px;
	font-weight: bold;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	user-select: none;
	width: ${(props) => props.w && props.w + "px"};
`;

export const ContainerFlexChips = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (max-width: ${styles.mediaMobileBig}) {
		${ChipCourse} {
			width: 45%;
			margin:10px 2px;
		}
	}
`;
