import React from "react";
import { Link } from "@reach/router";
import useNavigateToSearch from "hooks/useNavigateToSearch";

const MainColumn = () => {
	const navigate = useNavigateToSearch();
	
	return (
		<div className="col-footer">
			<div className="col-footer__header">Principal</div>
			<div className="col-footer__list-links">
				<Link className="list-link__item" to="/about-us">¿Quiénes somos?</Link>
				<Link className="list-link__item" to="/mentors">Nuestros instructores</Link>
				<div onClick={navigate} className="list-link__item">Ver todos los cursos</div>
			</div>
		</div>
	);
};

export default MainColumn;