import React, { FC, memo, useState } from 'react';
import * as Styled from './styles';
import Answer from '../Answer';
import { IAnswer } from 'redux/CourseExam/types';
import useAnswerList from '../../hooks/useAnswerList';

interface IProps {
	answers : IAnswer[];
	questionNumber : number;
}

const AnswerList : FC<IProps> = ({ answers , questionNumber }) => {
	const { answerSelected , AnswerSelection } = useAnswerList();

	return <Styled.Container>
		{
			answers.map((v,i) => (
				<Answer
					key={i}
					data={v}
					onClick={AnswerSelection(v.optionId, questionNumber)}
					isSelected={answerSelected === v.optionId}
				/>
			))
		}
	</Styled.Container>
};

export default memo(AnswerList);