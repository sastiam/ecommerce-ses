import React, { FC, memo } from 'react';
import * as Styled from './styles';

import { IQuestion } from 'redux/CourseExam/types'

import Question from '../Question';

interface IProps {
	questions : IQuestion[]
}

const ListQuestion : FC<IProps> = ({ questions }) => (
	<Styled.Container>
		{
			questions.map((v,i) => (
				<Question 
					key={i}
					number={i}
					data={v}
				/>	
			))
		}
	</Styled.Container>
);

export default memo(ListQuestion);