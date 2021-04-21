import React, { memo } from 'react';
import * as Styled from './styles';
import GenericTitle from '../GenericTitle';
import Card from './Card';

const Politics = [
	{
		text : 'Brindar los recursos necesarios a fin de cumplir con nuestros requisitos contractuales, corporativos, legales y/o de otra índole aplicables a nuestras actividades.'
	},
	{
		text : 'Eliminar los peligros o, en su defecto, reducir los riesgos asociados a nuestras actividades'
	},
	{
		text : 'Mantener condiciones apropiadas de trabajo para prevenir daños contra la salud de nuestros colaboradores',
	},
	{
		text : 'Fomentar la consulta y participación de nuestros colaboradores en los aspectos relacionados al SIG.'
	}
]

const IntegratedPolitics = () => (
	<Styled.Container>
		<GenericTitle title='Nuestra Política Integrada' />
		<Styled.Description>
			El Instituto de Seguridad y Salud en Construcción - ISESAC es una organización peruana dedicada a la recopilación y difusión de conocimiento relevante en materia de mejora de procesos y prevención de riesgos, y a brindar servicios de asesoramiento empresarial y capacitación de personal, misión con la que busca contribuir con el logro de los objetivos de las personas, empresas e instituciones que así lo requieran.
		</Styled.Description>
		<Styled.SubTitle>En tal sentido, nos comprometemos a :</Styled.SubTitle>
		<Styled.CardList>
			{ Politics.map((v,i) => <Card key={i} text={v.text} />) }
		</Styled.CardList>
		<Styled.Description>
			La presente política integrada está a disposición de nuestras partes interesadas diversas y es comunicada al interior de
			nuestra organización con la intención de concientizar a nuestros colaboradores acerca de sus compromisos individuales de la importancia de alcanzar un óptimo desempeño personal y organizacional.
		</Styled.Description>
	</Styled.Container>
);

export default memo(IntegratedPolitics);