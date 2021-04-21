import styled from "styled-components";

interface IContainerProps {
	fontSize? : string | number;
}

export const Container = styled.button<IContainerProps>(({ fontSize }) => ({
	color: '#fff',
	fontSize: fontSize || "1.5em",
	cursor: 'pointer',
	background: 'none',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	'.active:active' : {
		transform : 'scale(.95)'
	}
}));