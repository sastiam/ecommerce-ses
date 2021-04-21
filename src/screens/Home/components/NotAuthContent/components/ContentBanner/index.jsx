import React, { useContext } from "react";
import "./index.scss";

//Context
import { ModalControllerContext } from "../../../../../../context/ModalController";

//Componentes
import Input from "../../../../../../components/common/Input";

const ContentBanner = ({ title , description }) => {
	//Context
	const { updateStateSearchModal } = useContext(ModalControllerContext);

	//Actions
	const onClick = () => updateStateSearchModal(true);

	return <div className="content-banner">
		<div className="central-title">
			<h1 className="title">{title}</h1>
			<p className="message">{description}</p>
		</div>
		<div className="content-input">
			<Input.Search onClick={onClick} placeholder="Encuentra nuestros mejores cursos" />				
		</div>
	</div>
}

export default ContentBanner;