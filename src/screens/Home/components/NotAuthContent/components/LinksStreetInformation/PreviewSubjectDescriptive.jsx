import React, { useState } from "react";
import PreviewImage from "./PreviewImage";
import PreviewImageLink from "./PreviewImageLink";

const PreviewSubjectDescriptive = ({ data }) => {
	const [ indexPreview, setIndexPreview ] = useState(0);
	const { image, text, textLink } = data[indexPreview];
	
	// activar elemento cuando el mouse esta sobre el
	const setCurrentPoint = (index) => ({
		onMouseEnter: () => setIndexPreview(index),
		active: index === indexPreview,
	});

	return (
		<>
			<div className="street-row links">
				<PreviewImageLink to="/mentors" text="Instructores" {...setCurrentPoint(0)} />
				<PreviewImageLink	to="/about-us" text="Nosotros" {...setCurrentPoint(1)} />
				<PreviewImageLink	to="/search"	text="Cursos en línea"	{...setCurrentPoint(2)} />
			</div>
			<div className="street-row preview">
				<PreviewImage
					image={image}
					text={text}
					textLink={textLink}
				/>
			</div>
		</>
	);
};

export default PreviewSubjectDescriptive;
