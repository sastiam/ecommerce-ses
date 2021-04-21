import React, { memo, FC } from "react";
import TitleBold from "components/common/TitleBold";
import { IPropsNoResults } from "../../../../interfaces";

const NoResults : FC<IPropsNoResults> = ({ text }) => {
	return (
		<TitleBold fontSize="2em">
			No se encontro alguna coinicidencia con "{text}"
		</TitleBold>
	);
};

export default memo(NoResults);