import React, { useCallback } from "react";
import "./index.scss";
import { useNavigate } from "@reach/router";

const EmptyCoursesPreview = () => {
	const navigate = useNavigate();

	const navigateToSearch = useCallback(() => navigate('search') ,[]);

	return (
		<div className="empty-preview-recommendation">
			<span className='message-title'>Aun no posees cursos en tu biblioteca.</span>
			<button className='message-button' onClick={navigateToSearch}>Explora nuestros cursos</button>
		</div>
	);
};

export default EmptyCoursesPreview;
