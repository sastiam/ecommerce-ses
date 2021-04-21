import React from "react";
import "./index.scss";

const AnimatableCircle = props => {
  const { icon , onClick } = props;

	return <div className="cart-icon-nav" onClick={onClick}>
		<div className="circle-active"></div>
		<div className="icon">{icon}</div>
	</div>
}

export default AnimatableCircle;