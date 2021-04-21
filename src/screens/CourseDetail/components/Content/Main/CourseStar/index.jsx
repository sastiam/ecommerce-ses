import React, { useContext, memo } from "react";
import "./index.scss";

import TitleBold from "../../../../../../components/common/TitleBold";
import { AuthContext } from "../../../../../../context/Auth";
import GlobalButton from "../../../../../../components/common/GlobalButton";
import ListUserPuntuaction from "./ListUserPuntuaction";
import useStarAmount from "../../../../../../hooks/useStarAmount";
import { ModalControllerContext } from "../../../../../../context/ModalController";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";

const CourseStar = () => {
	//Context
	const { userAuth } = useContext(AuthContext);
	const { updateStatePunctuationModalCourseDetail } = useContext(ModalControllerContext);

	//Props
	const { user , course : { puntuaction } } = useCourseDetailRedux();
	const { amount , usersPuntuaction  } = puntuaction;
	const { isObtainsCourse , isMentor } = user;

	//Hooks
	const stars = useStarAmount(amount);

	//Actions
	const onClick = () => updateStatePunctuationModalCourseDetail(true);

	return <div>
		<header className="puntuation">
			<div className="total-puntuation">
				<TitleBold fontWeight="600">{amount % 1 ? Math.round(amount * 100) / 100 : amount + ".0"}</TitleBold>
			</div>
			<div className="icons-puntuation">
				<div className="icons">
					{stars}
				</div>
				<div className="text">
					<span>Media Total</span>
				</div>
			</div>
		</header>
		<div className="content-button">
			{ 
				!isMentor ?
					(userAuth && isObtainsCourse) && 
						<GlobalButton onClick={onClick} fontSize="14px" fontWeight="900" paddingVertical=".5em" sizeWidth="210px" ghost>
							¡Quiero Valorar este Curso!
						</GlobalButton> 
					: null
			}
		</div>
		<div>
			<ListUserPuntuaction usersPuntuaction={usersPuntuaction} />
		</div>
	</div>
}

export default memo(CourseStar);