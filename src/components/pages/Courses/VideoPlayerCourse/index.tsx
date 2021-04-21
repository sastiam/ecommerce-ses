import React, { memo, FC } from "react";
import classnames from "classnames";

import * as Styled from './styles';

import ProgressBar from "./components/ProgressBar";
import PlayControl from "./components/PlayControl";
import OptionList from "./components/OptionList";
import useVideoPlayer from "./hooks/useVideoPlayer";

interface IProps {
	src : string;
	onVideoEnd?() : void;
	autoplay? : boolean;
	imagePreview? : string;
}

const VideoPlayerCourse : FC<IProps> = ({ src , autoplay,  imagePreview , onVideoEnd }) => {
	const video = useVideoPlayer(src, onVideoEnd);
	const { refVideo , duration , currentTime, playing , muted , barPercentage , bufferedPercentage, pause } = video;

	//Dynamic Styles
	const classVideoControls = classnames({ init : playing });
	const classControlsContainer = classnames({ hide : !playing });

	if(!src) return <></>;

	return <Styled.Container>
		<Styled.Video
			src={src}
			ref={refVideo}
			poster={imagePreview}
			autoPlay={autoplay}
			onPlay={video.OnPlay}
			onProgress={video.OnProgress}
			onTimeUpdate={video.OnTimeUpdate}
			onSeeked={video.OnUpdateBuffered}
			onEnded={video.OnEnded}
		/>
		<Styled.VideoControls className={classVideoControls} >
			<Styled.ControlsContainer className={classControlsContainer} >
				<ProgressBar
					buffered={bufferedPercentage}
					currentTime={barPercentage}
					onClick={video.OnClickProgressBar}
				/>
				<OptionList 
					currentTime={currentTime}
					isMuted={muted}
					isPause={pause}
					duration={duration}
					onClickPlayOrPause={video.OnClickPause}
					onClickMuted={video.OnClickMuted}
					onClickNext={video.OnClickNextOrPrevious('next')}
					onClickPrevious={video.OnClickNextOrPrevious('previous')}
				/>
			</Styled.ControlsContainer>
		</Styled.VideoControls>
		{ !playing && <PlayControl onClick={video.OnClickPlay} /> }
	</Styled.Container>
}

VideoPlayerCourse.defaultProps = {
	autoplay : false
}

export default memo(VideoPlayerCourse);