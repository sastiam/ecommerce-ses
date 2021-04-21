import React from "react";
import { BannerContentImage , BannerContentVideo , CentralContent, BannerBase } from "./styles";

const StartUpBanner = ({ children , filepath , verticalSize , video }) => {
	if(video){
		return <BannerBase verticalSize={verticalSize}>
			<BannerContentVideo autoPlay loop sourceVideo={filepath} />
			<CentralContent>{children}</CentralContent>	
		</BannerBase>
	}

	return <BannerContentImage sourceImage={filepath} verticalSize={verticalSize}>
		<CentralContent>{children}</CentralContent>
	</BannerContentImage>
}

StartUpBanner.defaultProps = {
	filepath : "",
	video : true
}

export default StartUpBanner;