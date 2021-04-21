import React, { FC, memo, MouseEvent } from 'react';
import * as Styled from './styles';

interface IProps {
	buffered : number;
	currentTime : number;
	onClick?(element : MouseEvent<HTMLDivElement>) : void;
}

const ProgressBar : FC<IProps> = ({ buffered , currentTime , onClick }) => (
	<div>
		<Styled.Container onClick={onClick}>
			<Styled.Bar>
				<Styled.Buffered percentage={buffered} />
				<Styled.CurrentTime percentage={currentTime} >
					<Styled.CurrentTimeIndicator />
				</Styled.CurrentTime>				
			</Styled.Bar>
		</Styled.Container>
	</div>
);

export default memo(ProgressBar);