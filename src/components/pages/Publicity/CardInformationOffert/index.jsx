import React from "react";
import classnames from "classnames";
import "./index.scss";

const CardInformationOffert = ({ title , text , icon , main }) => {
	const styles = classnames("card-information-offert",{ main });

	return <div className={styles}>
		<header className="card-icon-information">
			<div className="card-icon">
				{ icon }
			</div>
		</header>
		<footer className="content-card">
			<span className="card-title">{title}</span>
			<div className="card-information">{text}</div>
		</footer>
	</div>
}

export default CardInformationOffert;