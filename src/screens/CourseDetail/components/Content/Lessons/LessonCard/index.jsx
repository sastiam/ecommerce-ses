import React, { useState } from "react";
import classnames from "classnames";
import { FiChevronDown } from "react-icons/fi";
import "./index.scss";
import ListItemLessonHide from "./ListItemLessonHide";

const LessonCard = ({ moduleNumber , title , itemsHide } ) => {
	//Hooks
	const [ open , setOpen ] = useState(false);

	//Action
	const onClick = () => itemsHide.length && setOpen(!open);

	//Styles Dynamic
	const classDynamic = classnames("lesson",{ open , "items-hide-empty" : itemsHide.length < 1 });
	const classDynamicTitle = classnames("title",{ open });
	const classDynamicDetail = classnames("detail-lessons", { hide : !open });

	return <li className={classDynamic} >
		<div className="main-lesson" onClick={onClick}>
			<span className={classDynamicTitle}>
				<span>Módulo {moduleNumber} : {title}</span>
				<span className="icon">
					<FiChevronDown />
				</span>
			</span>
			<span className="subtitle">{itemsHide.length} {itemsHide.length === 1 ? "clase" : "clases"}</span>
		</div>
		<div className={classDynamicDetail}>
			<ListItemLessonHide itemsHide={itemsHide} />
		</div>
	</li>
}

LessonCard.defaultProps = {
	moduleNumber : 1,
	title : "Introduccion"
}

export default LessonCard;