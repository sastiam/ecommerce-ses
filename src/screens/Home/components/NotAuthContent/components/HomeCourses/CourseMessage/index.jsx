import React, { memo } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import useNavigateToSearch from "hooks/useNavigateToSearch";
import "./index.scss";

const CourseMessage = () => {
	const navigate = useNavigateToSearch();

	return <div className="courses-message">
		<div onClick={navigate} className="message-link">
			<span>Explorar todos nuestros cursos</span>
			<div className="icon">
				<AiOutlineArrowRight />
			</div>
		</div>
	</div>
};

export default memo(CourseMessage);