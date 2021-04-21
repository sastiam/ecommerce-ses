import React from "react";
import { navigate } from "@reach/router";
import GlobalButton from "../../../common/GlobalButton";
import MainColumn from "../FooterDetailColumns/MainColumn";
import CoursesColum from "../FooterDetailColumns/CoursesColum";
import ContactInformation from "../FooterComponents/ContactInformation";
import useNavigateToSearch from "hooks/useNavigateToSearch";

export default function FooterDetailColumns() {
	const navigate = useNavigateToSearch();

	return (
		<>
			<MainColumn />
			<CoursesColum />
			<div></div>
			<div className="col-footer">
				<div className="col-footer__header">
					<div className="company-information">
						<ContactInformation title="Oficina:" detail="Calle Amazonas 142, La Molina - Lima." />
						<ContactInformation title="Contacto:" detail="992 790 315 / 981 529 398" />
						<ContactInformation detail="Lo invitamos cordialmente a solicitar una cotización y/o reuniones diversas de coordinación." />
					</div>
				</div>
				<div className="container-button">
					<GlobalButton onClick={navigate}>Busca nuevos cursos</GlobalButton>
				</div>
			</div>
		</>
	);
}
