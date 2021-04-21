import React, { useContext } from "react";
import * as Styled from './styles';
import { BsPlay } from "react-icons/bs";
import { navigate } from "@reach/router";

//Parent Context
import { AuthContext } from "../../../../../../../context/Auth";
import { AiOutlineLock } from "react-icons/ai";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";

const ItemLessonHide = ({ idCourseClass , lessonNumber , title , duration }) => {
	const { 
		user : { isObtainsCourse , isMentor } ,
		course : { data : { id } } 
	} = useCourseDetailRedux();

	//Context
	const { userAuth } = useContext(AuthContext);

	const view_condition = userAuth && (isMentor || isObtainsCourse);

	//Actions
	const onClick = () => view_condition ? navigate(`/course/${id}/${idCourseClass}`) : null;

	return <Styled.Container onClick={onClick}>
		<Styled.Icon>
			{ view_condition ? <BsPlay /> : <AiOutlineLock /> }
		</Styled.Icon>
		<Styled.TextContainer>
			<Styled.Title>Clase {lessonNumber} : {title}</Styled.Title>
			<Styled.Duration>
				{ view_condition ? "(Disponible)" : "(No Disponible)" }
			</Styled.Duration>
		</Styled.TextContainer>
	</Styled.Container>
}

export default ItemLessonHide;