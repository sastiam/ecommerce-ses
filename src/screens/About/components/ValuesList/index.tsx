import React, { memo } from 'react';
import GenericTitle from '../GenericTitle';
import * as Styled from './styles';
import Value from './Value';
import Compromiso from 'images/contact/compromiso.png'
import Comunicacion from 'images/contact/comunicacion.jpeg'
import Excelencia from 'images/contact/excelencia.png'
import Integridad from 'images/contact/integridad.png'
import Respeto from 'images/contact/respeto.png'
import Seguridad from 'images/contact/seguridad.png'
import useSlider from 'hooks/useSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const values = [
	{
		image : Compromiso,
		title : 'Compromiso',
		description : 'Enfocado en resultados en función a acuerdos pre-establecidos, que conlleven a alcanzar nuestros objetivos y la fidelización del cliente.'
	},
	{
		image : Respeto,
		title : 'Respeto',
		description : 'Siempre tratamos a las personas con respeto, dignidad y cortesía. Generamos confianza mediante comunicaciones abiertas y participativas día a día.'
	},
	{
		image : Integridad,
		title : 'Integridad',
		description : 'Nuestras acciones estan enfocadas en la honestidad, equidad, ética y transparencia en todo lo que hacemos en congruencia con los valores y principios.'
	},
	{
		image : Excelencia,
		title : 'Excelencia',
		description : 'Nos encontramos en constante desafío con la finalidad de desarrollar y ofrecer nuevas soluciones de calidad, descubriendo nuevos caminos y alternativas para mejorar como empresa siendo responsable con nuestros trabajadores y el entorno.'
	},
	{
		image : Seguridad,
		title : 'Seguridad',
		description : 'Promovemos una cultura preventiva y activa, practicando la seguridad dia a dia como una forma de vida, con enfoque de gestión de riesgos a través de la jerarquía de controles.'
	},
	{
		image : Comunicacion,
		title : 'Comunicación ',
		description : 'Fomentar el intercambio de forma efectiva de ideas, pensamientos y sentimientos con todas las personas que nos rodean, en un ambiente de cordialidad y buscando el enriquecimiento personal de las partes.'
	}
]

const ValuesList = () => {
	const { ref, onMove } = useSlider({
		autoSlide : false
	});

	return(
	<Styled.Container>
		<GenericTitle title='Nuestros Valores' />
		<Styled.ContainerScrollable>
			<Styled.ContainerValuesCard ref={ref}>
					{
						values.map((v,i) => (
							<Value
								key={i}
								image={v.image}
								title={v.title}
								description={v.description}	
							/>
						))
					}
			</Styled.ContainerValuesCard>
			<Styled.ButtonMove dir="left" onClick={()=>onMove(-1)}>
				<IoIosArrowBack/>
			</Styled.ButtonMove>
			<Styled.ButtonMove dir="right"  onClick={()=>onMove(1)}>
				<IoIosArrowForward/>
			</Styled.ButtonMove>
		</Styled.ContainerScrollable>
	</Styled.Container>
	)
};

export default memo(ValuesList);