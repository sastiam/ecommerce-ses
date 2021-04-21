import React, { useContext , memo } from "react";
import { useNavigate } from "@reach/router";
import { FaTimes } from "react-icons/fa";
import classnames from "classnames";
import * as Styled from './styles'

//Parent Context
import { ModalControllerContext } from "context/ModalController";

//UI Components
import FullScreenModal from "components/common/FullScreenModal";
import GlobalDiv from "components/common/GlobalDiv";
import TitleBold from "components/common/TitleBold";
import GlobalButton from "components/common/GlobalButton";

//Components
import VideoPlayerCourse from "components/pages/Courses/VideoPlayerCourse";

const PreviewCourse = () => {
	//Hooks
	const navigate = useNavigate();

	//Context
	const { previewCourse , updatePreviewCourse } = useContext(ModalControllerContext);
	const { id , title , mentor, videoPreview } = previewCourse.information

	//Dynamic Styles
	const classDynamic = classnames({ hide : !previewCourse.modalActive });

	//Actions
	const onClickClose = () => {
		updatePreviewCourse({
			modalActive : false,
			information : {}
		});
	}

	const onClick = () => navigate(`/course/${id}`);

	return <FullScreenModal background="rgb(0,0,0,.5)" className={classDynamic} center>
		<Styled.Container>
			<GlobalDiv height="350px">
				<VideoPlayerCourse src={videoPreview} />
			</GlobalDiv>
				<GlobalDiv paddingVertical="2em" paddingHorizontal="2em">
				<Styled.Grid>
					<GlobalDiv>
						<TitleBold onClick={onClick} hover fontWeight="600" fontSize="1.1em">{title}</TitleBold>
						<TitleBold fontWeight="400" fontSize=".75em">{`${mentor}`}</TitleBold>
					</GlobalDiv>
					<GlobalDiv paddingLeft="2em">
						<GlobalButton sizeWidth="180px" paddingVertical=".8em" onClick={onClick}>Ver Curso</GlobalButton>
					</GlobalDiv>
				</Styled.Grid>
			</GlobalDiv>
		</Styled.Container>
		<Styled.IconClose onClick={onClickClose}>
			<FaTimes />
		</Styled.IconClose>
	</FullScreenModal>
}

export default memo(PreviewCourse);