import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	margin-bottom: 4em;
`;


export const ContainerScrollable = styled.div`
	position:relative;
`


type ButtonMoveProps = {
	dir: "left" | "right";
};
const size = 35;
export const ButtonMove = styled.div<ButtonMoveProps>(({ dir }) => ({
	position: 'absolute',
	width: size,
	height: size,
	top: '50%',
	transform: 'translateY(-50%)',
	fontSize: '2em',
	marginLeft: 5,
	marginRight:5,
	cursor: 'pointer',
	transition: 'color .3s',
	left : dir === 'left' ? -(size + 20) : 'initial',
	right : dir === 'right' ? -(size + 20) : 'initial',
	':hover' : {
		color: 'var(--color-base)',
	}
}));

export const ContainerValuesCard = styled.div`
	width: 100%;
	display:grid;
	column-gap: 30px;
	grid-template-columns:repeat(6,1fr);
	overflow-x: auto;
	&::-webkit-scrollbar {
		display:none;
	}
`;
