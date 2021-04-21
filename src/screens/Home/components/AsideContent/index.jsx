import React from "react";
import AsideCard from "./AsideCard";
import "./index.scss";
import { navigate } from "@reach/router";

const AsideContent = () => {
	//Actions
	const onClickCardA = () => navigate('/about-us');
	const onClickCardB = () => navigate('/tutorial');

	return <aside className="aside-content-home">
		<AsideCard 
			mainWord="premium" 
			title="Obtén acceso total al catálogo con una membresía." 
			textButton="Me interesa"
			align="end"
			onClick={onClickCardA}
		/>
		<AsideCard 
			mainWord="empresas" 
			title="Obtén acceso total al catálogo con una membresía." 
			textButton="Enterate más"	
			align="start"
			onClick={onClickCardB}
		/>
	</aside>
}

export default AsideContent;