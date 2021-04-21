import React from 'react'
import getVideoDuration from 'screens/CourseClassVideoPlayer/shared/utils/getVideoDuration'
import styled from 'styled-components'
import CheckCompleted from '../../../../../shared/components/CheckCompleted'
import { CardText, CardWrapper } from '../Common/styles'
import TextPlaying from '../Common/TextPlaying'

const S = {
	Container : styled(CardWrapper)`
		display:flex;
		padding:0 16px;
		align-items:stretch;
		.detail {
			padding:15px 0;
			display:flex;
			flex-direction:column;
			.name {
				margin-bottom:6px;
			}
		}
		.completed {
			display:flex;
			margin-right:15px;
		}
	`
}

type ClassModuleProps = {
	name : string;
	duration : number;
	isPlaying ?: boolean;
	onClick ?: () => void;
	completed ?: boolean;
}
export default function ClassModule({name,duration,isPlaying,onClick,completed} : ClassModuleProps) {
	return (
		<S.Container hover selected={isPlaying} onClick={onClick}>
				<div className="completed">
					<CheckCompleted completed={completed} />
				</div>
			<div className="detail">
				<CardText className="name" weight fontSize="medium" >{name}</CardText>
				<div className="detail__footer">
					<CardText weight fontSize="small" variant="neutral">{getVideoDuration(duration * 60)}</CardText>
					<TextPlaying visible={isPlaying} />
				</div>
				</div>
		</S.Container>
	)
}
