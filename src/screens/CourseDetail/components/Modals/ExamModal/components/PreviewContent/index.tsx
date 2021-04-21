import React from 'react';
import * as Styled from './styles';
import useCourseExamRedux from 'redux/CourseExam/useCourseExamRedux';
import Consideration from './Consideration';
import BasicQuestion from './BasicQuestion';

const PreviewContent = () => {
	const { questions } = useCourseExamRedux();
	
	return <Styled.Container>
		<Styled.ConsiderationsContainer>
			<Styled.Title>Consideraciones</Styled.Title>
			<Styled.ConsiderationList>
				<Consideration text="Haber estudiado todo el contenido del curso" />
				<Consideration text="Haber estudiado todo el contenido del curso" />
				<Consideration text="Haber estudiado todo el contenido del curso" />
			</Styled.ConsiderationList>
		</Styled.ConsiderationsContainer>
		<div>
			<Styled.Title>Preguntas del Examen</Styled.Title>
			<Styled.Description>
				Estas son las preguntas que te vendran en tu examen.
				Podras visualizar las alternativas en cuanto presiones el boton <strong>Comenzar examen</strong>
			</Styled.Description>
			<Styled.QuestionList>
				{
					questions.data.map((v,i) => (
						<BasicQuestion
							number={i + 1}
							point={20 / questions.data.length}
						/>
					))
				}
			</Styled.QuestionList>
		</div>
	</Styled.Container>
};

export default PreviewContent;