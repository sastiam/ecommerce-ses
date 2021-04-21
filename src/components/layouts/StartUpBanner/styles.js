import styled from "styled-components";

const BannerBase = styled.section`
	width: 100%;
	height: ${props => props.verticalSize ? props.verticalSize : "650px"};
	position: relative;
	background-color: var(--color-base);

	&:after {
		content : "";
		width : 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0,0,0,.6);
	}

	@media screen and (max-width : 1024px){
		height: 550px;
	}

	@media screen and (max-width : 750px){
		height: 450px;
	}

	@media screen and (max-width : 480px){
		height: 400px;
	}
`;

const BannerContentImage = styled(BannerBase)`
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	background-position: center;
	background-blend-mode: darken;
	background-image : url(${props => props.sourceImage});
`;

const BannerContentVideo = styled.video.attrs(props => ({
	src : props.sourceVideo,
	autoplay : true,
	muted : true
}))`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: relative;
`;

const CentralContent = styled.div`
	width: 80%;
	height: max-content;
	margin: auto;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	right: 0;

	@media screen and max-width(1024px){
		width: 90%;
	}
`;

export {
	BannerBase,
	BannerContentImage,
	BannerContentVideo,
	CentralContent
}