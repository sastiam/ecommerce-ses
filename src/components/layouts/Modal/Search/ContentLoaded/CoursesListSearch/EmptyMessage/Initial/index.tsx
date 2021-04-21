import React from "react";
import MessageEmptyResult from "components/pages/Courses/MessageEmptyResult";

const Initial = () => {
	return (
		<MessageEmptyResult
			title="No existen cursos"
			message="Ups, por el momento no tenemos cursos disponibles para ti, lo sentimos estamos trabajando en ello"
			textLink="ir a los mentores"
			link="/search"
		/>
	);
};

export default Initial;
