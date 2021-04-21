import React from 'react';
import * as Styled from './styles';
import MainLayout from 'components/layouts/MainLayout';
import Navigation from 'components/layouts/Navigation';
import FooterDetail from 'components/layouts/FooterDetail';
import InformationCardList from './components/InformationCardList';
import IntegratedPolitics from './components/IntegratedPolitics';
import { AiOutlineDown } from 'react-icons/ai';
import ValuesList from './components/ValuesList';
import CompanyLocation from './components/CompanyLocation';

const About = () => (
	<MainLayout titlePage='Contactanos' >
		<Navigation.Normal />
		<Styled.ContainerImageBackground>
			<Styled.CentralContainer>
				<Styled.Title>Nosotros</Styled.Title>
				<Styled.Description>
					<b>El Instituto de Seguridad y Salud en Construcción nace en el año 2017</b> con el 
					propósito de administrar y difundir conocimiento técnico especializado en materia de seguridad, salud ocupacional y protección ambiental, así como para brindar asesoramiento y capacitación a personas y/o empresas orientadas a la prevención de pérdidas, protección de la contaminación y la excelencia organizacional, en particular para el sector construcción y actividades afines.
				</Styled.Description>
			</Styled.CentralContainer>
			<Styled.FloatingIcon href='#main-content'>
				<AiOutlineDown color='#fff' size={48} />
			</Styled.FloatingIcon>
		</Styled.ContainerImageBackground>
		<Styled.ContainerMessage>
			<Styled.Message>Somos una organización que ha contribuido a la fecha con servicios contratados y actividades de apoyo en las organizaciones que han confiado en nosotros.</Styled.Message>
		</Styled.ContainerMessage>
		<Styled.ContainerComponents id='main-content' >
			<InformationCardList />
			<IntegratedPolitics />
			<ValuesList />	
			<CompanyLocation/>
		</Styled.ContainerComponents>
		<FooterDetail />
	</MainLayout>
);

export default About;