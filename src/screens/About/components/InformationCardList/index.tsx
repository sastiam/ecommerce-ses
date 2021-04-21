import React, { memo } from 'react';
import * as Styled from './styles';
import InformationCard from './InformationCard';

import Vision from 'images/contact/vision.png';
import Mision from 'images/contact/mision.png';

const configuration = [
	{
		title : 'Nuestra Misión',
		description : 'Somos una Organización que se dedica a la consultoría, capacitación y difusión de conocimiento especializado que busca contribuir con forjar una cultura nacional en materia de prevención.',
		isRight : false,
		image : Mision
	},
	{
		title : 'Nuestra Visión',
		description : 'Llegar a ser el máximo referente nacional en materia de prevención y gestión, para la siguiente década.',
		isRight : true,
		image : Vision
	}
]

const ListInformationCard = () => (
	<Styled.Container>
		{
			configuration.map((v,i) => (
				<InformationCard key={i} {...v} />
			))
		}
	</Styled.Container>
);

export default memo(ListInformationCard)