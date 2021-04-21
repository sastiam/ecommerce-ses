import React, { FC } from "react";
import TitleBold from "components/common/TitleBold";

interface IProps {
	total : number
}

const TotalResult : FC<IProps> = ({ total }) => {
	return total ? (
		<TitleBold display="inline-block" fontSize="1em">
			{total} Resultados
		</TitleBold>
	) : null;
};

TotalResult.defaultProps = {
	total: 0
};

export default TotalResult;
