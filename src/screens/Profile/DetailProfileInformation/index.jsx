import React from 'react'
import "./index.scss";
import DetailProfileMain from './DetailProfileMain';
import LoadableComponent from 'components/common/LoadableComponent';
import DetailProfileLoading from '../DetailProfileLoaders/DetailProfileLoading';

const DetailProfileInformation = () => {
	return (
		<div className="flex-columns">
				<div className="flex-row detail">
					<LoadableComponent module={()=>import("./DetailProfileAside")} fallback={<DetailProfileLoading/>} />
				</div>
				<div className="flex-row main">
					<DetailProfileMain/>
				</div>
		</div>
		)
}

export default DetailProfileInformation;