import React, { useState, useRef, memo } from "react";
import "./index.scss";
import EditableButtonChange from "./EditableButtonChange";
import EditableInput from "./EditableInput";

const CardProfileEditable = (props) => {
	const { title, textEditable, maxLength, onEditable, rows, isArea } = props;
	const [editable, setEditable] = useState(false);
	const input = useRef();

	const onEditableInformation = () => {
		setEditable(!editable);
		if (editable) {
			onEditable(input.current.value);
		}
	};

	return (
		<div className="card-editable">
			<div className="flex header">
				<p className="title">{title}</p>
				<EditableButtonChange
					editable={editable}
					onClick={onEditableInformation}
				/>
			</div>
			<div className="flex">
				<EditableInput
					ref={input}
					textEditable={textEditable}
					editable={editable}
					maxLength={maxLength}
					rows={rows}
					isArea={isArea}
				/>
			</div>
		</div>
	);
};

export default memo(CardProfileEditable);
