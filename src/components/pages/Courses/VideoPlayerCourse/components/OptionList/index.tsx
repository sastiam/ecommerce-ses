import React, { FC, memo } from 'react';
import * as Styled from './styles';
import Control from '../Control';

import { 
	TiVolumeUp,
	TiVolumeMute,
	TiMediaRewindOutline,
	TiMediaPauseOutline,
	TiMediaFastForwardOutline,
	TiMediaPlayOutline
} from "react-icons/ti";

interface IProps {
	currentTime : number;
	duration : number;
	isPause? : boolean;
	isMuted? : boolean;
	onClickPlayOrPause?() : void;
	onClickMuted?() : void;
	onClickNext() : void;
	onClickPrevious() : void;
}

const options : Intl.DateTimeFormatOptions = {
	minute : '2-digit',
	second : '2-digit'
}

const OptionList : FC<IProps> = ({ currentTime , duration , isPause , isMuted , onClickPlayOrPause , onClickMuted , onClickNext, onClickPrevious }) => {
	const current_time = Intl.DateTimeFormat("es-ES",options).format(currentTime * 1000);
	const max_time = Intl.DateTimeFormat("es-ES", options).format(duration * 1000);

	return <Styled.Container>
		<Styled.ControlVideoState>
			<Control active onClick={onClickPrevious} >
				<TiMediaRewindOutline />
			</Control>
			<Control active onClick={onClickPlayOrPause} >
				{ isPause ? <TiMediaPlayOutline /> : <TiMediaPauseOutline /> }
			</Control>
			<Control active onClick={onClickNext} >
				<TiMediaFastForwardOutline/>
			</Control>
		</Styled.ControlVideoState>
		<Styled.TimeVideoState>
			<Styled.Time>{current_time}</Styled.Time>
			<Styled.Time className='separator'>/</Styled.Time>
			<Styled.Time>{max_time}</Styled.Time>
		</Styled.TimeVideoState>
		<Styled.ControlVideoState>
			<Control active fontSize="1.3em" onClick={onClickMuted} >
				{ !isMuted ? <TiVolumeUp /> : <TiVolumeMute /> }
			</Control>
		</Styled.ControlVideoState>
	</Styled.Container>
};

export default memo(OptionList);