import React, { FC } from 'react';
import useExamFinish from '../../hooks/useFooterActions';
import * as Styled from './styles';

interface IProps {
	examPercentage : number;
}

const Footer : FC<IProps> = ({ examPercentage }) => {
	const { disabledButton , onClick, leftText, rightText } = useExamFinish(examPercentage);

	return <Styled.MainContainer>
		<Styled.FooterContainer>
			<Styled.PercentageExam>{leftText}</Styled.PercentageExam>
			<Styled.ExamFinishButton onClick={onClick} disabled={disabledButton} >
				{rightText}
			</Styled.ExamFinishButton>
		</Styled.FooterContainer>
	</Styled.MainContainer>
};

export default Footer;