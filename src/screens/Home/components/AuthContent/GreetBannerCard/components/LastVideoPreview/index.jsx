import React from "react";
import "./index.scss";
import { PanelPreviewInformation, PanelFlex } from "./Styles";
import { RecommendationText } from "../../../../../../../components/pages/Courses/RecommendationList/styles";
import GlobalDiv from "../../../../../../../components/common/GlobalDiv";
import GlobalButton from "../../../../../../../components/common/GlobalButton";
import { FaPlayCircle } from "react-icons/fa";
import { navigate } from "@reach/router";
import useLastCourse from "../../../../../../../hooks/useLastCourse";

const LastVideoPreview = () => {
	const { course } = useLastCourse();
	const NavigateToClass = () => navigate(`/course/${course.id}/${course.idCourseClass}`)
	return (
			<div className="last-video">
				<img
					className="image"
					src={course.imagePreview}
					alt=""
				/>
				<PanelPreviewInformation>
					<RecommendationText color="white" fontSize="1.5em" weight="900">
						Continuar video
					</RecommendationText>
					<PanelFlex margin="auto 0 0 0" alignItems="center">
						<GlobalDiv style={{ display : 'flex' }} >
							<RecommendationText color="white" fontSize="1em" fontSizeMobile=".7em" weight="normal">
								<PanelFlex alignItems="center" justify="none">
									<FaPlayCircle size={30} />
								</PanelFlex>
							</RecommendationText>
							<RecommendationText style={{ paddingLeft : 10 }} color="white" fontSize="1.5em" fontSizeMobile="1em" weight="900">
								{course.title}
							</RecommendationText>
						</GlobalDiv>
						<GlobalDiv textAlign="right">
							<GlobalButton onClick={NavigateToClass}>Continuar clase</GlobalButton>
						</GlobalDiv>
					</PanelFlex>
				</PanelPreviewInformation>
			</div>
		);
};

export default LastVideoPreview;
