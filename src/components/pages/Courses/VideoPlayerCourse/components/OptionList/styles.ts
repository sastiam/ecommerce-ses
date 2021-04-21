import styled from "styled-components";

export const ControlVideoState = styled.div({
	width: 150,
	display: 'grid',
	gridTemplateColumns: '1fr 1fr 1fr',
});

export const TimeVideoState = styled.div({
	padding: '0 1.5em'
});

export const Time = styled.span({
	color: '#fff',
	fontSize: 13,
	'&.separator' : {
		padding: '0 10px',
	}
});

//Main
export const Container = styled.div({
	display: 'flex',
	alignItems: 'center',
	padding: '1em 0',
	'@media screen and (max-width : 500px)' : {
		padding: '.8em 0',
		[Time] : {
			fontSize : 11
		},
		[`${ControlVideoState} button`] : {
			fontSize : '1.2em'
		}
	}
});