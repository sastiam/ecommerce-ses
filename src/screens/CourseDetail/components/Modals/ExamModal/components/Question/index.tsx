import React, { FC } from 'react';
import { IQuestion } from 'redux/CourseExam/types';
import ListAnswer from '../AnswerList';
import * as Styled from './styles';

interface IProps {
	data : IQuestion;
	number : number;
}

const Question : FC<IProps> = ({ data , number }) => (
	<Styled.Container>
		<Styled.Title>Pregunta {number + 1}</Styled.Title>
		<Styled.QuestionDescription>
			{data.question}
		</Styled.QuestionDescription>
		<ListAnswer answers={data.options} questionNumber={number} />
	</Styled.Container>
);	

export default Question;