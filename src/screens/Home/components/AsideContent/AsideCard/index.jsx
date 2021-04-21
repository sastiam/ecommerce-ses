import React from "react";
import classnames from "classnames";
import "./index.scss";

const AsideCard = props => {
	//Props
	const { mainWord , title , textButton , align , onClick } = props;
	
	//Dynamics Styles
	const classDynamics = classnames("aside-card",align);

	return <div className={classDynamics}>
		<div className="container-text-card">
			<div className="main-word">
				<p className="word">{mainWord}</p>
			</div>
			<div className="aside-title">
				<p className="title">{title}</p>
			</div>
			<div className="aside-button">
				<button onClick={onClick} className="button">{textButton}</button>
			</div>			
		</div>
	</div>
}

export default AsideCard;