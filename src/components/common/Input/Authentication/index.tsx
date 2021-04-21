import React, { useState, memo, FC, ChangeEvent, createRef } from "react";
import classnames from "classnames";
import "./index.scss";

type TProps = {
	text : string;
	type? : "text" | "password" | "numeric" | "email",
	onChange?(value : string);
}

const Input : FC<TProps> = ({ text , type , onChange }) => {
	const [ required , setRequired ] = useState(false);
	const [ focus , setFocus ] = useState(false); 

	//Styles Dynamic
	const classDynamic = classnames("input-auth",{ required },{ focus });

	//Ref
	const inputRef = createRef<HTMLInputElement>();

	//Actions
	const onBlur = () => {
		setRequired(() => !inputRef.current?.value);
		setFocus(() => false);
	}

	const onChangeValue = (ev : ChangeEvent<HTMLInputElement>) => {
		if(!onChange) return;

		onChange(ev.currentTarget.value);
	}

	const onFocus = () => setFocus(() => !required);
	
	return <div className="input-container-auth">
		<div className={classDynamic}>
			<label className="text">{text}</label>
			<input 
				ref={inputRef}
				onChange={onChangeValue} 
				required 
				className="input" 
				onFocus={onFocus} 
				type={type}
				onBlur={onBlur} 
			/>
		</div>
		{ required && <span className="required-message">Campo requerido</span> }
	</div>
}

Input.defaultProps = {
	type : "text"
}

export default memo(Input);