import React, { memo } from "react";
import * as styled from './styles';

const PreviewImageLink = (props) => {
	const { text, active, ...restProps } = props;

	return (
		<styled.ImageLink {...restProps}>
			{text}
		</styled.ImageLink>
	);
};

export default memo(PreviewImageLink);
