import React, { useContext, useRef, useState } from "react";
import classnames from "classnames";
import "./index.scss";

import CourseRepository from "application/requests/CourseRepostitory";

import { AuthContext } from "context/Auth";
import { ModalControllerContext } from "context/ModalController";

import GlobalButton from "components/common/GlobalButton";
import TitleBold from "components/common/TitleBold";

import useParameters from "hooks/useParameters";
import useStarAmount from "hooks/useStarAmount";

const ContentPunctuation = () => {
	const [ stars , setStars ] = useState(-1);

	const starIcons = useStarAmount(stars);
	const { id } = useParameters();
	const inputRef = useRef();

	const { userAuth , userAuthInformation } = useContext(AuthContext);
	const { puntuactionCourseModal } = useContext(ModalControllerContext);

	const dynamicStyles = classnames("modal-content-punctuation",{ show : puntuactionCourseModal });

	const onChange = ev => {
		try{
			const value = parseFloat(ev.target.value);
			var realValue = value;

			if(realValue >= 5) realValue = 5;
			else if(realValue <= 0) realValue = 0;

			realValue = Math.round(realValue * 100) / 100;

			inputRef.current.value = realValue;
			setStars(realValue);
		}catch(e){
			console.log(e);
			alert("No toques el HTML");
		}
	}

	const addCoursePunctuation = (amount) => {
		const courseRepo = new CourseRepository();
		return courseRepo.CreatePuntuaction({
			idCourse : id,
			idUser : userAuthInformation.idUser,
			amount
		});
	}

	const onClick = async () => {
		if(userAuth && stars > 0){
			const response = await addCoursePunctuation(stars);
			response && window.location.reload();
		}
	}

	return <div className={dynamicStyles}>
		<div className="title">
			<TitleBold fontSize="2em" fontWeight="bold">Puntua el curso</TitleBold>
		</div>
		<div className="icon">
			{starIcons}
		</div>
		<div className="input-div">
			<input ref={inputRef} onChange={onChange} className="input" type="number" placeholder="0.0 - 5.0" />
		</div>
		<div>
			<GlobalButton onClick={onClick} paddingVertical=".5em" sizeWidth="250px" >Puntuar</GlobalButton>
		</div>
	</div>
}

export default ContentPunctuation;