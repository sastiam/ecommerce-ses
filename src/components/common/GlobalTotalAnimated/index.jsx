import React, { useState, useEffect, memo } from "react";
import "./index.scss";
import classNames from "classnames";

const GlobalTotalAnimated = (props) => {
	const { duration, total, steps, className, ...restProps } = props;
	const [totalAnimate, setTotalAnimate] = useState(0);
	const classTotal = classNames("total", className);

	// animar desde el numero 0 hasta el total
	useEffect(() => {
		const interval = setInterval( 
			() => totalAnimate < total && setTotalAnimate(totalAnimate + steps),
			duration
		);
		return () => clearInterval(interval);
	});

	return (
		<h2 className={classTotal} {...restProps}>
			{addZeroExtra(totalAnimate)}
			{totalAnimate}
		</h2>
	);
};

const addZeroExtra = (value) => (value > 10 ? "" : "0");

GlobalTotalAnimated.defaultProps = {
	duration: 20,
	steps: 1,
};

export default memo(GlobalTotalAnimated);
