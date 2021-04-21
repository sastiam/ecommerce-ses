import React, { memo } from "react";

//Utilies
import GlobalDiv from "../../../../../components/common/GlobalDiv";
import VideoPlayerCourse from "../../../../../components/pages/Courses/VideoPlayerCourse";
import styled from "styled-components";

const ImageContainer = styled.div`
	max-height: 380px;

	@media screen and (max-width: 1200px) {
		max-height: 300px;
	}
`

const VideoTutorial = props => {
	const { url } = props;
	
	return <GlobalDiv paddingVertical="2.5em">
		<ImageContainer>
			<VideoPlayerCourse src={url} />
		</ImageContainer>
		<div className="extra-information">
		</div>
	</GlobalDiv>
}

export default memo(VideoTutorial);