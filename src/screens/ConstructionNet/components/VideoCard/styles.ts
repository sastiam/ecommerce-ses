import styled from "styled-components";


const Container = styled.article`
	height: max-content;
	box-shadow: 0 5px 15px rgb(240,240,240);
	border-radius: 25px;
	background-color: #fff;
`;
	
const MainContent = styled.div`
	padding: 2em;
	padding-bottom: 1em;
	border-bottom: 1px solid #F4F4F4;

	@media screen and (max-width: 1200px) {
		padding: 1.5em;
	}

	@media screen and (max-width: 1024px) {
		padding: 2em;
		padding-bottom: 1em;
	}
`;
	
const ImageContainer = styled.div`
	width: 100%;
	height: 220px;
	border-radius: 25px;
	overflow: hidden;

	@media screen and (max-width: 1200px) {
		height: 180px;
	}

	@media screen and (max-width: 1024px) {
		height: 220px;
	}

	@media screen and (max-width: 400px) {
		height: 185px;
	}
`;
	
const Image = styled.img`
	width: inherit;
	height: inherit;
	border-radius: inherit;
	object-fit: cover;
	cursor: pointer;
	transition: transform .3s;

	&:hover {
		filter: brightness(80%);
		transform: scale(1.2);
	}
`;
	
const Information = styled.div`
	margin-top: 1em;
`;
	
const Title = styled.span`
	display: block;
	font-weight: 900;
	font-size: 1.2em;
	color: #4B4B4B;

	@media screen and (max-width: 400px) {
		font-size: 1.1em;
	}
`;
	
const DatePublished = styled.span`
	display: block;
	font-size: .9em;
	color: #B5B5B5;
	margin-top: .5em;

	@media screen and (max-width: 400px) {
		font-size: .8em;
	}
`;
	
const BottomContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em 0;
`;

const ButtonNavigate = styled.button`
	width: 80%;
	background-color: #F4F4F4;
	font-weight: bold;
	color: rgba(0,0,0,.54);
	text-align: center;
	transition: background .3s;
	padding: .6em 0; 
	border-radius: 2em;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		background-color: var(--color-base);
		color: #fff;
	}

	@media screen and (max-width: 400px) {
		font-size: 14px;
	}
`;


export {
	Container,
	BottomContent,
	DatePublished,
	Image,
	ImageContainer,
	Information,
	Title,
	MainContent,
	ButtonNavigate
}