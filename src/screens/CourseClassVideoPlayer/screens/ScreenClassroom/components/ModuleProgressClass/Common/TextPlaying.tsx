import React from "react";
import styled from "styled-components";
import { CardText } from "./styles"

const StyledText = styled(CardText)`
	margin-left: 10px;
	font-size: 0.7em;
`;

export default function TextPlaying({visible}:{visible?:boolean}) {
	if(visible) {
		return (
			<StyledText
				weight
				fontSize="small"
				uppercase
				variant="neutral"
			>
				REPRODUCIENDO
			</StyledText>
		);
	}
	return null;
}
