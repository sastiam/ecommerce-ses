import React, { FC, memo } from 'react';
import GlobalDiv from 'components/common/GlobalDiv';

//Components
import Title from "./Title";
import VideoTutorial from "./VideoTutorial";
import ContentInformation from "./ContentInformation";
import RoutesInline from "./RoutesInline";

//Redux
import { IConstructionNet } from 'application/metadata/interfaces/Tutorial';

interface IProps {
	data : IConstructionNet
}

const intlOptions : Intl.DateTimeFormatOptions = {
	year : 'numeric',
	month : 'long',
	day : 'numeric'
}

const TutorialContent : FC<IProps> = ({ data }) => {
	const date = Intl.DateTimeFormat('es-ES', intlOptions).format(new Date(data.createDate));

	return <section>
		<GlobalDiv paddingVertical="3em" className="responsive" sizeWidth="45%" center>
			<RoutesInline title={data.title} />
			<Title title={data.title} date={`${data.category} , ${date}`} />
			<VideoTutorial url={data.videoFile} />
			<ContentInformation text={data.description} />
		</GlobalDiv>
	</section>
}

export default memo(TutorialContent);