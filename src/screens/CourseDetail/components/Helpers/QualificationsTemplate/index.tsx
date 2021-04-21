import React from 'react';
import * as Styled from './styles';
import QualificationsEmpty from './components/QualificationsEmpty';
import QualificationList from './components/QualificationList';
import useQualificationsInit from './hooks/useQualificationInit';

const QualificationsTemplate = () => {
	const { qualifications , isLoading } = useQualificationsInit();

	return <Styled.Container>
		<Styled.Title>Calificaciones ({qualifications.length})</Styled.Title>
		<Styled.Description>
			En esta seccion podras ver todas tus calificaciones en el examen
		</Styled.Description>
		<Styled.ContentQualification>
			{
				isLoading ? null : 
					qualifications.length ? 
						<QualificationList data={qualifications} /> :
						<QualificationsEmpty />
			}
		</Styled.ContentQualification>
	</Styled.Container>
};

export default QualificationsTemplate;