import React from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import "./index.scss";

import { FiPlayCircle } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

//Components
import GlobalButton from "../../../../../components/common/GlobalButton";
import TitleBold from "../../../../../components/common/TitleBold";
import GlobalDiv from "../../../../../components/common/GlobalDiv";

//Hooks
import useProgressPercentage from "../../../../../hooks/useProgressPercentage";
import useCourseActions from "../../../hooks/useCourseActions";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";
import FavoriteIcon from "./FavoriteIcon";
import useFirstClassOfCourse from "redux/CourseDetail/selectors/useFirstClassOfCourse";

const LoadingBar = styled.div`
	width : ${props => props.horizontalSize ? props.horizontalSize : "50%"};
	height : 8px;
	background: var(--color-base);
`;

const Obtains = () => {
	const { 
		course : {
			progress,
			data : { id, imagePreview, title, level }
		},
		user : { isFavorite }
	} = useCourseDetailRedux();
	const firstClass = useFirstClassOfCourse();

	//Hooks
	const { currentPercentage } = useProgressPercentage(progress.data.classesCompleted, progress.data.courseClassMax);
	const { ToggleFavoriteCourse } = useCourseActions();

	//Actions
	const onClick = async () => await navigate(`/panel`);
	const onClickClass = async () => await navigate(`/course/${id}/${firstClass.idCourseClass}`);

	return <div className="main-header-course-obtains">
		<div className="content-course">
			<div className="course-information-main">
				<div onClick={onClick} className="action-back-courses">
					<span className="icon">
						<AiOutlineArrowLeft />
					</span>
					<span>Regresar a mis cursos</span>
				</div>
				<div className="course-text">
					<div className="title">
						<TitleBold fontSize="1.6em" fontWeight="bold">{title}</TitleBold>
						<GlobalDiv className="div" paddingTop=".4em">
							<span className="icon"><BsFillPlayFill /></span>
							<span className="subtitle">Nivel {level}</span>
						</GlobalDiv>
					</div>
					<div className="extra-actions-course">
						<GlobalButton className="btn-course-text" onClick={onClickClass}>Ver primera clase</GlobalButton>
						<FavoriteIcon active={isFavorite} onClick={ToggleFavoriteCourse} />
					</div>
				</div>
			</div>
			<div className="card-course-image" onClick={onClickClass}>
				<div className="image">
					<img className="img" src={imagePreview} alt=""/>
					<span className="icon-play">
						<FiPlayCircle />
					</span>
					<div className="image-text">
						{ !progress.isLoading && <span>{currentPercentage}% Completado</span> }
					</div>
				</div>
				{ !progress.isLoading && <LoadingBar horizontalSize={currentPercentage + "%"} /> }
			</div>			
		</div>
	</div>
}

export default Obtains;