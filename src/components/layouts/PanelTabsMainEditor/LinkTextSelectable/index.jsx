import React, { memo, useContext } from "react";
import "./index.scss";
import classNames from "classnames";
import { Link } from "@reach/router";
import { TabsEditorContext } from "../TabsEditorContext";

const LinkTextSelectable = (props) => {
	const { icon, children, ...restProps } = props;
	const { onToggle } = useContext(TabsEditorContext);
	// dar estilos cuando se selecciona el link
	const getProps = { 
		getProps : ({ isCurrent }) => ({
			className: classNames("text-selectable", { "text-selectable--active": isCurrent }),
		})
	}

	return (
		<div className="text-selectable-container" onClick={onToggle}>
			<Link {...restProps} {...getProps}>
				{icon && <span className="icon">{icon}</span> }
				{children}
			</Link>
		</div>
	);

};

export default memo(LinkTextSelectable);
