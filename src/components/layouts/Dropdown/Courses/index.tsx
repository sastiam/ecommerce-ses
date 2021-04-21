import React, { useContext, useEffect } from 'react';
import classnames from "classnames";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./index.scss";

//Context
import { ModalControllerContext } from 'context/ModalController';

const DropDownCourses = ({ title , children }) => {
	const { courseModal , updateStateCourseModal } = useContext(ModalControllerContext);
	const onClick = () => updateStateCourseModal(!courseModal);

	useEffect(() => {
		const onClickWindow = (event) => {
			event.stopPropagation();
			if(event.target.closest("#dropdown-list-zone") === null && courseModal) {
				updateStateCourseModal(false);
			}
		}
		window.addEventListener("click",onClickWindow);
		return () => window.removeEventListener("click",onClickWindow);
	},[courseModal]);

	const classDynamic = classnames("list-zone",{ hide : !courseModal });

	return <>
		<div className="dropdown-courses" id="dropdown-list-zone">
			<div className="title-zone" onClick={onClick}>
				<p className="text">
					<span className="title">{title}</span>
					<span className="icon">
						<RiArrowDropDownLine />
					</span>
				</p>
			</div>
			<div className={classDynamic}>
				{ children }
			</div>
		</div>
	</>
}

export default DropDownCourses;