import styled from "styled-components";

//Progress Bar
export const Bar = styled.div({
	'--bar-height' : 6,
	width: '100%',
	height : 'var(--bar-height)',
	backgroundColor: 'rgba(255,255,255,.2)',
	position: 'relative',
});

interface IBarProps {
	percentage? : number
}

export const Buffered = styled.div<IBarProps>(({ percentage }) => ({
	width : percentage ? `${percentage}%` : 0,
	height : '100%',
	backgroundColor : 'rgba(255,255,255,.2)'
}));

export const CurrentTime = styled.div<IBarProps>(({ percentage }) => ({
	width : percentage ? `${percentage}%` : 0,
	height : '100%',
	position: 'absolute',
	top: 0,
	left: 0,
	backgroundColor: 'var(--color-secondary)',	
}));

export const CurrentTimeIndicator = styled.div({
	width: 'calc(var(--bar-height) * 2)',
	height: 'calc(var(--bar-height) * 2)',
	borderRadius: '50%',
	backgroundColor: 'var(--color-secondary)',
	position: 'absolute',
	top: 'calc((var(--bar-height) / 2) * -1)',
	right: 'calc((var(--bar-height) / 2) * -1)',
	opacity: 0,
	visibility: 'hidden',
});

//Main
export const Container = styled.div({
	width: '100%',
	padding: '.5em 0',
	cursor: 'pointer',
	[`:hover ${CurrentTimeIndicator}`] : {
		opacity: 1,
		visibility: 'visible',
	},
	'@media screen and (max-width : 500px)' : {
		padding: '.3em 0',
		'--height-bar' : 4
	}
});