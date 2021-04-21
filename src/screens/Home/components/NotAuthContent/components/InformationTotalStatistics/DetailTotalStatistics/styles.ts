import styled from "styled-components";

export const Container = styled.div({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr',
	gridGap: '2em',
	'@media screen and (max-width : 750px)' : {
		'*' : {
			fontSize : '1.5em'
		}
	},
	'@media screen and (max-width : 480px)' : {
		gridTemplateColumns: '1fr'
	}
})