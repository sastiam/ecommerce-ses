import React from "react";
import GenericTitle from "../GenericTitle";
import { Wrapper } from "./styles";

const CompanyLocation = () => {
	return (
		<Wrapper>
			<div className="location__image">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1950.7955564667532!2d-76.94749538902728!3d-12.071629576125144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf556d4643e1bd4de!2sInstituto%20de%20Seguridad%20y%20Salud%20en%20Construcci%C3%B3n!5e0!3m2!1sen!2spe!4v1611608823958!5m2!1sen!2spe"
					frameBorder="0"
					aria-hidden="false"
					tabIndex={0}
					title="isesac-location"
				/>
			</div>
			<div className="location__detail">
				<GenericTitle title="Nuestra Ubicación" isRight />
				<div className="location__description">
					Nos ubicamos en la <b>Calle Amazonas 142, La Molina - Lima.</b>
				</div>
			</div>
		</Wrapper>
	);
};

export default CompanyLocation;
