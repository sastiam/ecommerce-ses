import React from "react";
import { FaTimes } from "react-icons/fa";
import "./index.scss";

const IconClose = ({ onClick }) => {
	return <div onClick={onClick} className="icon-close-modal-course-detail">
		<FaTimes />
	</div>
}

export default IconClose;