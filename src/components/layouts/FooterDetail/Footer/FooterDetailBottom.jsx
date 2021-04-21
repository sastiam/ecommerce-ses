import React from "react";
import {
	AiOutlineTwitter,
	AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

// link component
const LinkIcon = ({ icon, href }) => (
	<a className="links-icon-item" href={href} target="_black">
		{icon}
	</a>
);

export default function FooterDetailBottom() {
	return (
		<div className="nav-bottom">
			<div className="nav-bottom-col company-creator">
				<span className="detail-company">
					Derechos reservados a <strong>isesac.org</strong>
				</span>
			</div>
			<div className="nav-bottom-col">
				<div className="links-icon">
					<span className="detail-company links-icon-item lock">
						comercial@isesac.org
					</span>
					<div className="iconics"> 
						<LinkIcon href="https://www.facebook.com/isesacperu" icon={<FaFacebookF size={20} />} />
						<LinkIcon href="https://api.whatsapp.com/send?phone=51992790315" icon={<FaWhatsapp size={20}/>} />
						<LinkIcon href="/" icon={<AiOutlineTwitter size={20} />} />
						<LinkIcon href="https://www.linkedin.com/in/instituto-de-seguridad-y-salud-en-construcci%C3%B3n-isesac-a6843613a/" icon={<AiFillLinkedin size={20} />} />
					</div>
				</div>
			</div>
		</div>
	);
}
