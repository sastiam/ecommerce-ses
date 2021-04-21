import React, {FC } from "react";
import * as styled from "./style";
import ContainerScrollableClients from "./ListClients/ContainerScrollableClients";
import ContainerTitle from "./Title/ContainerTitle";

const BannerClients : FC = () => {	
	return (
		<styled.BannerWrapper>
			<ContainerTitle/>
			<ContainerScrollableClients />
		</styled.BannerWrapper>
	);
};

export default BannerClients;
