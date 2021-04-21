import React from "react";
import FooterDetailBottom from "./FooterDetailBottom";
import FooterDetailColumns from "./FooterDetailColumns";
import "./index.scss";

const Footer = () => {
	return (
		<footer className="footer-nav">
			<div className="row-footer">
				<FooterDetailColumns />
			</div>
			<div className="nav-bottom-container">
				<FooterDetailBottom />
			</div>
		</footer>
	);
};

export default Footer;
