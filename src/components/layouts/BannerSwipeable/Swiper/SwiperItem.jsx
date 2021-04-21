import React from "react";
import GlobalTitle from "../../../common/GlobalTitle";
import styled from "styled-components";

const SwiperBackground = styled.div`
	background: linear-gradient(45deg,rgba(0,0,0,.6) 10%,transparent 100%), url('${(props) => props.image}') no-repeat center / cover;
	width:100%;
	display:flex;
	align-items:center;
	cursor:default;
`;

const SwiperMessage = styled.div`
	color: white;
`;

const Wrapper = styled.div`
	padding: ${(props) => props.spacing};
	margin: ${(props) => props.margin};
	width: ${(props) => props.width};
`;

const SwiperItem = (props) => {
	const { image, title, message } = props;
	return (
		<SwiperBackground image={image} className="swiper">
			<Wrapper width="85%" margin="auto">
				<GlobalTitle
					text={title}
					color="white"
					fontSize=".7em"
					autoWidth
					align="flex-start"
					paddingHorizontal="0px"
					paddingVertical="15px"
				/>
				<SwiperMessage>{message}</SwiperMessage>
			</Wrapper>
		</SwiperBackground>
	);
};

export default SwiperItem;
