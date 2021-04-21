import styled from "styled-components";

export const ListOption = styled.ul({
	display : 'flex',
	justifyContent : 'center',
	alignItems : 'center'
});

export const CustomLink = styled.a({
	color : 'var(--color-text)',
	fontWeight : 800,
	fontSize : 'var(--fontSize)',
	margin: '0 var(--margin-option)',
	':hover' : {
		color : 'var(--color-text-hover)'
	}
});

export const ModalContainer = styled.div({
	width : 315,
	padding : '1em 3em 2em 3em',
	position : 'relative',
	borderRadius : 15,
	overflow : 'hidden',
	backgroundColor : '#fff',
	boxShadow: '5px 0 25px rgba(0,0,0,0.05), -5px -5px 12px rgba(0,0,0,0.05)'
});

export const BottomBar = styled.div({
	width : '100%',
	height : 8,
	backgroundColor : 'var(--color-base)',
	position : 'absolute',
	bottom : 0,
	left : 0
})

export const Container = styled.section({
	'--margin-option' : '1.5em',
	'--fontSize' : 15,
	display : 'flex',
	justifyContent : 'center',
	alignItems : 'center',
	'@media screen and (max-width : 1280px)' : {
		'--margin-option' : '.9em',
		'--fontSize' : 14
	}
});
