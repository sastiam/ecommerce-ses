import React, { FC, memo } from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import * as Styled from './styles';

interface IProps {
	onClick();
	title : string;
	lock? : boolean;
	unlockColor? : string;
	IconLeft : JSX.Element;
	IconRight : JSX.Element;
}

const CardLockTemplate : FC<IProps> = ({ onClick, lock , unlockColor , title , IconLeft, IconRight }) => {
	const onClickValidation = () => {
		if(lock) return;
		else onClick();
	}

	return <Styled.Container onClick={onClickValidation} unlockColor={unlockColor} lock={lock}>
		<Styled.TextContainer>
			<Styled.Icon>
				{IconLeft}
			</Styled.Icon>
			<Styled.Title>{title}</Styled.Title>
		</Styled.TextContainer>
		<Styled.Icon>
			{ lock ? <AiOutlineLock /> : IconRight }
		</Styled.Icon>
	</Styled.Container>
};

export default memo(CardLockTemplate);