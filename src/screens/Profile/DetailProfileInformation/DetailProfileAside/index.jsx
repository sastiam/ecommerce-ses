import React, { useContext } from "react";
import "./index.scss";
import CardProfileEditable from "./CardProfileEditable";
import { UserDetailContext } from "context/UserDetail";
import DetailProfileLoading from "../../DetailProfileLoaders/DetailProfileLoading";

const DetailProfileAside = () => {
	const { personalInformation: personal, updatePersonalInformation: update, loadingAside } = useContext(UserDetailContext);

	if (loadingAside) {
		return <DetailProfileLoading />
	}

	return (
		<div className="aside-profile">
			<CardProfileEditable
				title="Mi descripción"
				textEditable={personal.description || "Aún no hay descripción"}
				onEditable={(value) => update("description", value)}
				maxLength={200}
				isArea
			/>
			<CardProfileEditable
				title="A que me dedico"
				textEditable={personal.work || "No hay dedicación"}
				onEditable={(value) => update("work", value)}
				maxLength={100}
			/>
			<CardProfileEditable
				title="Mis habilidades"
				textEditable={personal.habilities || "Sin habilidades"}
				onEditable={(value) => update("habilities", value)}
				maxLength={200}
			/>
			<CardProfileEditable
				title="Mis programas que manejo"
				textEditable={personal.program || "No hay programas que se maneja"}
				onEditable={(value) => update("program", value)}
				maxLength={150}
			/>
		</div>
	);
};

export default DetailProfileAside;
