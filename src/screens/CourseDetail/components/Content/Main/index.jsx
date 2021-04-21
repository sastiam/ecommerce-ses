import React from "react";
import { ContainerGrid } from "./styles";
import "./index.scss";

//UI
import TitleBold from "../../../../../components/common/TitleBold";
import GlobalDiv from "../../../../../components/common/GlobalDiv";

//Components
import Card from "./Card";
import TeacherInformation from "./TeacherInformation";
import CourseStar from "./CourseStar";
import ListInformation from "./ListInformation";
import ContentInformation from "./ContentInformation";
import Modal from 'components/layouts/Modal';
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";

const Main = () => {
	const { user : { isObtainsCourse , isMentor } } = useCourseDetailRedux();

	return <>
		<div className="main-section">
			<div className="content-section">
				<GlobalDiv paddingVertical="3em" className="title-main-section">
					<TitleBold className="title" fontSize="1.5em">Te damos la bienvenida al curso</TitleBold>
				</GlobalDiv>
				<ContainerGrid>
					<Card title="Sobre este curso">
						<ListInformation />
					</Card>
					<Card title="Acerca del profesor">
						<TeacherInformation />
					</Card>
					<Card title="Valoración del curso">
						<CourseStar />
					</Card>
				</ContainerGrid>
				<ContentInformation />
			</div>
		</div>
		{ (isObtainsCourse && !isMentor) && <Modal.Puntuaction /> }
	</>
}



export default Main;