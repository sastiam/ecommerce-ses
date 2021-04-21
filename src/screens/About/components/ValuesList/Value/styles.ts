import styled from "styled-components";


export const Container = styled.div`
	width: 250px;
	height: auto;
	margin: 2em 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ImageContainer = styled.div`
	width: 160px;
	height: 160px;
	border-radius: 50%;
	overflow: hidden;
	background-color: rgb(230,230,230);
`;

export const Image = styled.img`
	width: inherit;
	height: inherit;
	border-radius: inherit;
`;

export const ContainerTitle = styled.div({
	height: 60,
	display: 'flex',
	justifyContent : 'center',
	alignItems: 'center'
});

export const Title = styled.span`
	font-weight: bold;
	font-size: 1.2em;
`;

export const Description = styled.p`
	text-align: center;	
`;