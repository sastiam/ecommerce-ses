import styled from "styled-components";

export const Video = styled.video({
	width: '100%',
	height: '100%',
	maxHeight: 'inherit',
	minHeight: 220,
	objectFit: 'contain',
	lineHeight: 0,
});

//Video Controls
export const VideoControls = styled.div({
	width: '100%',
	height: '100%',
	position: 'absolute',
	top: 0,
	left: 0,
	backgroundColor: 'rgba(0,0,0,.5)',
	lineHeight: 0,
	transition: '.3s',
	opacity : 0,
	visibility : 'hidden'
});

export const ControlsContainer = styled.div({
	width: '100%',
	position: 'absolute',
	bottom: 0,
	left: 0,
	padding: '0 2em',
	'&.hide' : {
		opacity: 0,
		visibility: 'hidden',
	},
	'@media screen and (max-width : 500px)' : {
		padding: '0 1em'
	}
});

//Main
export const Container = styled.div({
	width: '100%',
	height: '100%',
	maxHeight: 'inherit',
	position: 'relative',
	backgroundColor: '#000',
	lineHeight: 0,
	[`:hover ${VideoControls}.init`] : {
		opacity : 1,
		visibility : 'visible'
	}
});