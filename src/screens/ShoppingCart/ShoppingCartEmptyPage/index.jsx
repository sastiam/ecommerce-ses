import React from "react";
import "./index.scss";

//UI
import { IoMdHeartDislike } from "react-icons/io";
import GlobalButton from "../../../components/common/GlobalButton";
import useNavigateToSearch from "hooks/useNavigateToSearch";

const ShoppingCartEmptyPage = () => {
	const navigate = useNavigateToSearch();

	return <div className="container-message-no-items">
		<div className="title-message">
			<span className="text">Tu carrito de Compras</span>
		</div>
		<div className="content-message">
			<div className="icon">
				<IoMdHeartDislike />
			</div>
			<div className="information">
				<div className="title-information">
					<span className="text">Tu carrito esta vacio</span>
				</div>
				<div className="txt">
					<p className="p">Explora el catálogo y encuentra los mejores cursos para aprender nuevas habilidades.</p>
					<GlobalButton onClick={navigate}>Ir al Catalogo</GlobalButton>
				</div>
			</div>
		</div>
	</div>
}

export default ShoppingCartEmptyPage;