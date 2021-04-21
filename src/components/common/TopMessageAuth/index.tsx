import React, { FC, memo } from "react";
import * as S from './styles';

type TProps = {
	title : string;
	subtitle : string;
}

const TopMessageAuth : FC<TProps> = ({ title , subtitle }) => {
	return <S.Container>
		<S.Title>{title}</S.Title>
		<S.Subtitle>{subtitle}</S.Subtitle>
	</S.Container>
}

export default memo(TopMessageAuth);