import React, { FC, memo } from 'react';
import { IAnswer } from 'redux/CourseExam/types';
import * as Styled from './styles';

interface IProps {
	data : IAnswer;
	isSelected? : boolean;
	onClick?();
}

const Answer : FC<IProps> = ({ isSelected , onClick , data }) => (
	<Styled.Container onClick={onClick} >
		<Styled.RadioInput>
			{ isSelected && <Styled.SelectedElement /> }
		</Styled.RadioInput>
		<Styled.AnswerDescription>
			{data.option}
		</Styled.AnswerDescription>
	</Styled.Container>
);

export default memo(Answer);