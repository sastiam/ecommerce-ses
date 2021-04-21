import React from "react";
import "./index.scss";

const GlobalButtonUploadFile = (props) => {
	const { icon, title, ...restProps } = props;
	return (
		<label className="change-file" title={title}>
			<input type="file" className="file-input" {...restProps} />
			{icon}
		</label>
	);
};

export default GlobalButtonUploadFile;
