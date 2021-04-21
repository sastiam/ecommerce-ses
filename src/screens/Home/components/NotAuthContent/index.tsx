import React from 'react';

import StartUpBanner from 'components/layouts/StartUpBanner';
import ContentBanner from './components/ContentBanner';
import Offerts from './components/Offerts';
import HomeCourses from './components/HomeCourses';
import InformationTotalStatistics from './components/InformationTotalStatistics';
import LinksStreetInformation from './components/LinksStreetInformation';
import InformationOffert from 'components/pages/Publicity/InformationOffert';
import ManagerInformation from './components/ManagerInformation';
import BannerClients from 'components/layouts/BannerClients';
import AsideContent from '../AsideContent';

//Redux
import { TReduxState } from 'application/metadata/types';
import { IUserInterfaceStore } from 'redux/UserInterface/types';
import { shallowEqual, useSelector } from 'react-redux';

const NotAuthContent = () => {
	const {
		mainBanner : {
			bannerDescription,
			bannerTitle,
			bannerVideo
		}
	} = useSelector<TReduxState, IUserInterfaceStore>(s => s.userInterface, shallowEqual);

	return <>
		<StartUpBanner filepath={bannerVideo} verticalSize="650px">
			<ContentBanner title={bannerTitle} description={bannerDescription} />
		</StartUpBanner> 
		<Offerts />
		<HomeCourses />
		<InformationTotalStatistics />
		<LinksStreetInformation />
		<InformationOffert />
		<ManagerInformation />
		<BannerClients />
		<AsideContent />
	</>
}

export default NotAuthContent;