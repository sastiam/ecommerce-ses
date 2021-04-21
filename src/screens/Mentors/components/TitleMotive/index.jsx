import React from "react";
import "./index.scss";
import GlobalTitle from "components/common/GlobalTitle";
import GlobalDiv from "components/common/GlobalDiv";
import GlobalButton from "components/common/GlobalButton";
import useNavigateToSearch from "hooks/useNavigateToSearch";

const TitleMotive = () => {
	const navigate = useNavigateToSearch();

	return (
		<div className="title-motive">
			<GlobalTitle className="title" text="Conversa con nuestros mentores" paddingHorizontal="0px" paddingVertical="2em" autoWidth fontSize="1.1em" />
			<GlobalDiv paddingBottom="3em">
				<p className="motive-message">
					Tenemos a los mejores especialistas, quienes estarán acompañándote en
					esta ruta de aprendizaje para solucionar todas tus dudas y llegar juntos
					a la meta.
				</p>				
			</GlobalDiv>
			<GlobalButton onClick={navigate} >Compra nuestros cursos</GlobalButton>
		</div>
	);
};

export default TitleMotive;
