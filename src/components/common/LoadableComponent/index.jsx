import React from "react"
import Loadable from "react-loadable"

export default function LoadableComponent({module,fallback,...restProps}) {
		const Component = Loadable({
			loader: module,
			loading : () => fallback
		});
		return <Component {...restProps} />
}

LoadableComponent.defaultProps = {
	fallback : null
}