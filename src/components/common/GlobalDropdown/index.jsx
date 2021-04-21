import React, { memo, useState, useEffect } from "react";
import "./index.scss";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

const GlobalDropdown = (props) => {
	// propiedades
	const {
		className,
		dropdownHeader,
		dropdownBody,
		onChangeCollapsable,
		open,
	} = props;

	// clase perzonalizada para el contenedor del dropdown
	const classNameDropdown = classNames("dropdown", className);

	// toggle
	const [isOpen, setOpen] = useState(open);
	const setToogleDropdown = () => setOpen(!isOpen);

	useEffect(() => {
		onChangeCollapsable(isOpen);
	});

	return (
		<div className={classNameDropdown}>
			<div className="dropdown__header" onClick={setToogleDropdown}>
				{dropdownHeader}
			</div>
			<div className="dropdown__body">
				<CSSTransition in={isOpen} timeout={200} classNames="collapsable">
					<div>{isOpen && dropdownBody}</div>
				</CSSTransition>
			</div>
		</div>
	);
};

GlobalDropdown.defaultProps = {
	open: false,
	onChangeCollapsable: () => null,
};

export default memo(GlobalDropdown);
