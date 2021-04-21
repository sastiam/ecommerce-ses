import React from "react";
import { LoadingSpinnerContainer, DisplayContainer, ContainerSpinner, Spinner, TextIndicator } from "./styles";

const Loading = (props) => {
	return <LoadingSpinnerContainer {...props}>
		<DisplayContainer>
			<ContainerSpinner>
				<Spinner />
			</ContainerSpinner>
			{ !props.hideText && <TextIndicator>Cargando Isesac.org</TextIndicator> }
		</DisplayContainer>
	</LoadingSpinnerContainer>
}

Loading.defaultProps = {
	hideText : true
}

export default Loading;