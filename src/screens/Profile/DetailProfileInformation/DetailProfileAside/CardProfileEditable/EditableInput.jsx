import React, { forwardRef, useState, useEffect } from "react";

const EditableInput = forwardRef((props, ref) => {
	const { editable, textEditable, maxLength, rows, isArea } = props;
	const [limit, setLimit] = useState(0);

	useEffect(() => {
		setLimit(textEditable.length);
	}, [textEditable]);

	const handlerKeyUpCheckLimits = (e) => {
		if (!(limit < maxLength)) {
			e.target.value = e.target.value.substring(0, maxLength);
		}
		setLimit(e.target.value.length);
	};

	const options = {
		className: "editor-input",
		spellCheck: false,
		ref,
		defaultValue: textEditable,
		onKeyUp: (e) => handlerKeyUpCheckLimits(e),
	};

	return editable ? (
		<div className="editor">
			{isArea ? <textarea {...options} rows={rows} /> : <input {...options} />}
			<p className="editor-limit">
				{" "}
				{limit} / {maxLength}{" "}
			</p>
		</div>
	) : (
		<p className="text-editor">{textEditable}</p>
	);
});

EditableInput.defaultProps = {
	textEditable: "",
	rows: "10",
};

export default EditableInput;
