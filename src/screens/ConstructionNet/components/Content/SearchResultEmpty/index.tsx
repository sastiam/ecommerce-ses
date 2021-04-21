import React from "react";
import * as S from './styles';

import NetEmpty from 'images/NetEmpty.png';

const SearchResultEmpty = () => (
	<S.MainContainer>
		<S.SearchContainer>
			<S.ImageSearch src={NetEmpty} alt="net-empty"/>
			<S.TextContainer>
				<S.Title>
					No se han encontrado resultados
				</S.Title>
				<S.Description>
					Lo sentimos esta sección no posee artículos disponibles.
				</S.Description>
			</S.TextContainer>
		</S.SearchContainer>
	</S.MainContainer>
);

export default SearchResultEmpty;