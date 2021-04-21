import React from 'react'
import "./index.scss";
import { CSSTransition } from "react-transition-group"

const FixedMessageTooltip = ({ visible }) => (
	<CSSTransition in={visible} timeout={200} classNames="fixed-message" unmountOnExit>
		<div className="fixed-message-tooltip">
			Se actualizaron tus datos correctamente
		</div>
	</CSSTransition>
)

FixedMessageTooltip.defaultProps = {
	visible : false
}

export default FixedMessageTooltip
