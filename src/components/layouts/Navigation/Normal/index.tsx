import React, { memo } from "react";
import * as S from "./styles";

import Actions from "./Actions";
import Options from "./Options";
import Responsive from "./Responsive";
import Icon from "components/common/Icon";

import useResponsive from "hooks/useResponsive";

const Normal = () => {
	const { responsive } = useResponsive(1024);

	return <S.Container>
		<S.TitleContainer>
			<Icon.Enterprise />
			{ responsive && <Responsive /> }
		</S.TitleContainer>
		{
			!responsive && <>
				<Options />
				<Actions />
			</>
		}
	</S.Container>
}

export default memo(Normal);