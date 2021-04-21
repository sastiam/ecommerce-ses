import { createRef, useEffect, useState , SyntheticEvent, MouseEvent } from "react";

const useVideoPlayer = (src : string, onVideoEnd?) => {
	//States
	const [ playing , setPlaying ] = useState<boolean>(false);
	const [ pause , setPause ] = useState<boolean>(false);
	const [ muted , setMuted ] = useState<boolean>(false);

	const [ currentTime , setCurrentTime ] = useState<number>(0);
	const [ duration , setDuration ] = useState<number>(0);
	const [ bufferedPercentage , setBufferedPercentage ] = useState<number>(0);
	const [ barPercentage , setBarPercentage ] = useState<number>(0);

	const refVideo = createRef<HTMLVideoElement>();

	// - Actualiza el buffer de video
	const OnUpdateBuffered = (videoData : SyntheticEvent<HTMLVideoElement>) => {
		const video = videoData.currentTarget;
		const buffered = video.buffered;

		if(buffered.length){
			const percentage = (100 / video.duration) * buffered.end(buffered.length - 1);
			setBufferedPercentage(() => percentage);
		}
	}

	// - Al empezar a reproducirse el video
	const OnPlay = (videoData : SyntheticEvent<HTMLVideoElement>) => {
		setPlaying(() => true);

	/* 	const video = videoData.currentTarget;
		setDuration(() => Math.round(video.duration)); */
	}

	// - Terminar Video
	const OnEnded = () => {
		setPlaying(false);
		VideoReset();
		onVideoEnd && onVideoEnd();
	}

	// - Resetear Video
	const VideoReset = () => {
		setPlaying(() => false);
		setPause(() => false);
		setMuted(() => false);
		setCurrentTime(() => 0);
		setDuration(() => 0);
		setBufferedPercentage(() => 0);
		setBarPercentage(() => 0);
	}

	// - Carga del Video Completada
	const OnProgress = (videoData : SyntheticEvent<HTMLVideoElement>) => {
		OnUpdateBuffered(videoData);
	}

	// - Actualizar la barra de reproduccion
	const OnTimeUpdate = (videoData : SyntheticEvent<HTMLVideoElement>) => {
		const video = videoData.currentTarget;
		if(video.duration){
			const percentage = (100 / video.duration) * video.currentTime;
			setBarPercentage(() => percentage);

			if(duration === 0) setDuration(Math.round(video.duration));	
			
			setCurrentTime(() => Math.round(video.currentTime));
			OnUpdateBuffered(videoData);	
		}
	}

	// - Adelantar el video
	const OnClickProgressBar = (element : MouseEvent<HTMLDivElement>) => {
		const bar = element.currentTarget;
		const video = refVideo.current;

		if(video){
			const { width } = bar.getBoundingClientRect();

			if(video.duration){
				const cursor = element.nativeEvent.offsetX;
				video.currentTime = (cursor / width) * video.duration;				
			}
		}
	}

	//Iniciar el video
	const OnClickPlay = () => {
		const video = refVideo.current;
		if(!video) return;

		video.play();
	}

	// - Pausar el video
	const OnClickPause = () => {
		const video = refVideo.current;
		if(!video) return;

		if(!video.paused) video.pause();
		else video.play();	
		
		setPause(pause => !pause);
	}

	// - Mutear el video
	const OnClickMuted = () => {
		const video = refVideo.current;
		if(!video) return;

		video.muted = !video.muted;
		setMuted(!muted);
	}

	// - Adelantar el video
	const OnClickNextOrPrevious = (state : 'next' | 'previous') => () => {
		const video = refVideo.current;
		if(!video) return;

		const factory = state === 'next' ? 1 : -1,
			seconds = 10;

		video.currentTime += seconds * factory;
	}

	useEffect(() => {
		VideoReset();
	},[src])

	return {
		playing,
		pause,
		muted,
		currentTime,
		duration,
		bufferedPercentage,
		barPercentage,
		refVideo,
		OnClickPlay,
		OnClickMuted,
		OnClickPause,
		OnClickNextOrPrevious,
		OnPlay,
		OnProgress,
		OnTimeUpdate,
		OnClickProgressBar,
		OnUpdateBuffered,
		OnEnded
	}
}

export default useVideoPlayer;