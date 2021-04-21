import React from "react";
import "./index.scss";

const EmptyComments = () => {
	return (
		<div className="course-empty">
			<h3 className="course-empty__title">
				Aún no existen mensajes para este curso
			</h3>
			<div className="course-empty__message">
				Se el primero en realizar un comentario a este curso, compra el curso
				ahora
			</div>
		</div>
	);
};

export default EmptyComments;
