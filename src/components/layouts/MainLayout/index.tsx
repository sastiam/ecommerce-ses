import React, { FC } from "react";
import { useLocation } from "@reach/router";

import useResponsive from "hooks/useResponsive";

//Component
import Modal from "components/layouts/Modal";
import SEO from "components/common/SEO";
import SlideMenuResponsive from "components/layouts/SlideMenuResponsive";

//Provider
import { ModalControllerProvider } from "context/ModalController";
import FloatMessages from "../FloatMessages";

interface IProps {
	titlePage : string;
}

const MainLayout : FC<IProps> = ({ titlePage , children }) => {
	const location = useLocation();
	const { responsive } = useResponsive(1024);

	//Variables
	let lockPreviewCourse : boolean = location.pathname.split("/").includes("course");

	return <SEO options={{ title : titlePage + " | Isesac" }}>
		<ModalControllerProvider>
			{ children }
			<Modal.Portals>
				<Modal.Search />
				<Modal.Shopping />
				{ (!lockPreviewCourse) && <Modal.PreviewCourse /> }	
				{ (responsive) && <SlideMenuResponsive /> }	
				<FloatMessages />
			</Modal.Portals>
		</ModalControllerProvider>	
	</SEO>
}

export default MainLayout;