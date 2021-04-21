import React from "react";
import GlobalDiv from "../../../common/GlobalDiv";
import GlobalTitle from "../../../common/GlobalTitle";
import TitleBold from "../../../common/TitleBold";
import GlobalButton from "../../../common/GlobalButton";
import { navigate } from "@reach/router";
import { useMediaQuery } from "react-responsive";

const MessageEmptyResult = (props) => {
	const { title, message, textLink, padding } = props;
	const mediaTablet = useMediaQuery({query:`(max-width:800px)`});
	return (
		<GlobalDiv {...padding} >
			<GlobalTitle text={title} paddingVertical="3em" fontSize={mediaTablet ? "12px" : ".95em"} />
			<TitleBold
				textAlign="center"
				color="silver"
				fontWeight="100"
				fontSize="15px"
				paddingVertical="10px"
			>
				{message}
			</TitleBold>
			{
				textLink && (
					<GlobalDiv paddingVertical="20px">
						<GlobalButton margin="auto" display="block" onClick={() => navigate("/search")}>{textLink}</GlobalButton>
					</GlobalDiv>
				)
			}
		</GlobalDiv>
	);
};

export default MessageEmptyResult;
