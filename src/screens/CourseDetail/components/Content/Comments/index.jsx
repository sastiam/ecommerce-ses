import React, { useContext, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import "./index.scss";
import GlobalDiv from "../../../../../components/common/GlobalDiv";
import TitleBold from "../../../../../components/common/TitleBold";
import ListComments from "./ListComments";
import { AuthContext } from "../../../../../context/Auth";
import UserCommentArea from "./UserCommentArea";
import File from "../../Helpers/File";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";
import getComments from "redux/CourseDetail/actions/getComments";
import { useDispatch } from "react-redux";
import { useCourseDetailContext } from "screens/CourseDetail/store/Global/context";
import useResponsive from "hooks/useResponsive";

const Comments = () => {
	//Context
	const dispatch = useDispatch();
	const { userAuth } = useContext(AuthContext);
	const { responsive } = useResponsive(1020);
	const { course , user } = useCourseDetailRedux();
	const { RenderComments , ChangeRenderComments } = useCourseDetailContext();
	const { isObtainsCourse , isMentor } = user;

	useEffect(() => {
		if(course.data.id && course.comments.isLoading){
			dispatch(getComments(course.data.id));
		}
	},[course.data.id]);

	return <div className="comments-course-detail">
		<GlobalDiv className="container-comments" sizeWidth="80%" center className="grid">
			<GlobalDiv paddingVertical="2em">
				<GlobalDiv paddingVertical="2em">
					<TitleBold fontWeight="bold" fontSize="1.2em">({course.comments.list.length}) Comentarios</TitleBold>
				</GlobalDiv>
				{ (isMentor || (userAuth && isObtainsCourse)) && <UserCommentArea /> }
				<ListComments max={RenderComments} />
				<GlobalDiv textAlign="center" className="add" paddingVertical="2em">
					{ 
						RenderComments < course.comments.list.length && (
							<button className="button" onClick={ChangeRenderComments}>
								<span className="icon"><FiChevronDown/></span>
								<span>Ver mas Comentarios</span>
							</button>
						)
					}
				</GlobalDiv>
			</GlobalDiv>
			{
				!responsive && (
					<GlobalDiv paddingVertical="4em">
						<File 
							icon={<AiOutlineComment />} 
							title={!userAuth ? "Accede para comentar" : (isObtainsCourse || isMentor) ? "Ya Puedes Comentar Ahora" : "Compra el Curso y Comenta" }
							button={!userAuth}
							content={
								!userAuth ?
									"Inicia Sesión para poder comentar." :
									(isObtainsCourse || isMentor) ? 
										"No esperes más y brindanos un comentario sobre el curso." :
										"Accede a la sección de comentarios y brindanos tu mejor comentario."
							}
						/> 
					</GlobalDiv>
				)
			}
		</GlobalDiv>		
	</div>
}

export default Comments;