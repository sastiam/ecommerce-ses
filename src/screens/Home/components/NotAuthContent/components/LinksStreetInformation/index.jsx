import React from "react";
import "./index.scss";
import { useMediaQuery } from "react-responsive";

import styles from "styles/index.scss";
import PreviewSubjectDescriptive from "./PreviewSubjectDescriptive";
import PreviewSubjectScrollable from "./PreviewSubjectScrollable";

import Carrera from 'images/home/carreras.jpg';
import Certificado from 'images/home/certificado.jpg';
import Curso from 'images/home/curso.jpg';

// datos de prueba
const data = [
	{
		text:
			"Aprende o complementa tus habilidades junto a los mejores expertos de la industria.",
		textLink: "Ver más",
		link : "/mentors",
		image: Carrera,
	},
	{
		text: "Certificate y conviértete en un especialista en lo que más te apasiona.",
		textLink: "Acerca de nosotros",
		link : "/about-us",
		image: Certificado
	},
	{
		text:	"Desarrolla tu potencial y construye con nosotros tu camino profesional.",
		textLink: "Buscar cursos",
		link : "/search",
		image: Curso
	},
];

const LinksStreetInformation = () => {
	const isMobile = useMediaQuery({
		query: `(max-width:${styles.mediaDesktopSmall})`,
	});

	return (
		<div className="street-information">
			<div className="header-information">
				<p className="title">ELIGE TU PROPIO CAMINO</p>
				{
					isMobile && (
						<div className="street-message">
							Los mejores expertos en la industria que guiarán tu aprendizaje y te
							comunicarán lo mejor de sus experiencias.
						</div>
					)
				}
			</div>
			<div className="body-information">
				{
					!isMobile ? 
						<PreviewSubjectDescriptive data={data} /> : 
						<PreviewSubjectScrollable data={data} />
				}
			</div>
		</div>
	);
};

export default LinksStreetInformation;
