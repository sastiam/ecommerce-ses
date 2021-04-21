import React from "react";
import "./index.scss";
import classNames from "classnames";

const GlobalTitle = (props) => {
	const { className, sizeWidth , text , paddingVertical , minWidth , paddingHorizontal , textAlign , align , autoWidth , fontSize , color , fontWeight } = props;

	let styleDiv = { 
		fontSize, 
		minWidth,
		paddingTop : paddingVertical,
		paddingBottom : paddingVertical,
		paddingLeft : paddingHorizontal,
		paddingRight : paddingHorizontal,
		justifyContent : align,
	}

	let styleText = { color , fontWeight , width : sizeWidth , textAlign }
	let classNameText = classNames('text-title',className);

	if(autoWidth) {
		styleText = { 
			...styleText , width : "auto", minWidth : "auto" }
	}
	
	return <div className="title-component" style={styleDiv}>
		<span style={styleText} className={classNameText}>{text}</span>
	</div>		
}

export default GlobalTitle;