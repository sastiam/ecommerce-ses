import React, { memo } from "react";
import "./index.scss";

//Components
import File from "../../Helpers/File";
import TitleBold from "../../../../../components/common/TitleBold";
import GlobalDiv from "../../../../../components/common/GlobalDiv";
import ListLessonCard from "./ListLessonCard";
import Modals from "./Modals";

//Store
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";
import ExamModalProvider from "screens/CourseDetail/store/ExamModal/provider";

const Lessons = () => {
	const { user : { isObtainsCourse , isMentor }, course : { data : { classFile } } } = useCourseDetailRedux();

	return <GlobalDiv paddingVertical="2em" className="content-lesson-section">
		<div className="lesson-section">
			<GlobalDiv>
				<GlobalDiv paddingBottom="2em">
					<GlobalDiv paddingBottom="1em">
						<TitleBold fontWeight="bold" fontSize="1.2em">Módulos y clases de tu curso</TitleBold>
					</GlobalDiv>
					<p className="description">Este es todo el contenido que verás dentro de este curso. ¡Feliz aprendizaje!</p>
				</GlobalDiv>
				<ExamModalProvider>
					<ListLessonCard />
					<Modals />
				</ExamModalProvider>
			</GlobalDiv>
			<GlobalDiv>
				{ (isObtainsCourse || isMentor) && <File link={classFile} /> }
			</GlobalDiv>
		</div>		
	</GlobalDiv>
}

export default memo(Lessons);