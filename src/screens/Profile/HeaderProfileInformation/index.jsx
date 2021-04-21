import React from "react";
import "./index.scss";
import HeaderProfileUsername from "./HeaderProfileUsername";
import HeaderProfileBackdrop from "./HeaderProfileBackdrop";

const HeaderProfileInformation = () => {
	return <div className="header-profile">
		<HeaderProfileBackdrop/>
		<HeaderProfileUsername/>
	</div>;
};

export default HeaderProfileInformation;
