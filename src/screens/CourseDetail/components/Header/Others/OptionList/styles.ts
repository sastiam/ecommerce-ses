import styled from "styled-components";

export const Container = styled.div({
	width: '100%'
});

export const ListSection = styled.div({
	width: '100%',
	backgroundColor: '#fff',
	borderBottom: '2px solid rgb(230,230,230)',
})

export const List = styled.div({
	width: '80%',
	margin: '0 auto',
	display: 'flex',
	'@media screen and (max-width: 920px)' : {
		width : '90%',
	},
	'@media screen and (max-width: 750px)' : {
		width: '95%',
		overflowX: 'auto',
		'::-webkit-scrollbar' : {
			display : 'none'
		}
	}
})