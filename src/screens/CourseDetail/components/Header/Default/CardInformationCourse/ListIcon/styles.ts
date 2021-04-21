import styled from "styled-components";

export const Container = styled.div({
	width : '80%',
	margin : '0 auto',
	paddingTop: '1em',
	position: 'relative',
	display : 'flex',
	justifyContent : 'space-between',
	alignItems : 'center',
	'@media screen and (max-width : 440px)' : {
		width : '90%'
	}
});