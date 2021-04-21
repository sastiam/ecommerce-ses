import React from "react";
import { forwardRef } from "react";
import "./index.scss";
import { memo } from "react";

const EditorProfileInput = forwardRef((props, ref) => {
	const { placeholder, title, type, defaultValue } = props;
	return (
		<div className="container-field">
			{title && <span className="title-field">{title}</span>}
			<input
				type={type}
				placeholder={placeholder}
				defaultValue={defaultValue}
				ref={ref}
				className="input-field"
				spellCheck={false}
			/>
		</div>
	);
});

EditorProfileInput.defaultProps = {
	type: "text",
};

export default memo(EditorProfileInput);
