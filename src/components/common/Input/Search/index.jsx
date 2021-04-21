import React from "react";
import { GoSearch } from "react-icons/go";
import classnames from "classnames";
import "./index.scss";

const InputSearch = props => {
	//Props
	const { large , placeholder, onClick , onChange } = props;

	//Dynamics Styles
	const classDynamic = classnames("input-search-component",{ large });

	return <div className={classDynamic}>
		<div className="input-icon">
			<GoSearch />
		</div>
		{
			!large ? 
				<div className="input-search" onClick={onClick}>
					<p className="input-text">{placeholder}</p>
				</div> :
				<div className="input-search">
					<input type="search" className="input-text" onChange={onChange} placeholder={placeholder} />
				</div>
		}
	</div>
}

export default InputSearch;