import React from 'react'
import "./index.scss";
import MessageTotalStatistics from './MessageTotalStatistics';
import DetailTotalStatistics from './DetailTotalStatistics';

const InformationTotalStatistics = () => (
	<div className="total-statistics">
		<div className="row message">
			<MessageTotalStatistics/>
		</div>
		<div className="row number-totals">
			<DetailTotalStatistics/>
		</div>
	</div>
)

export default InformationTotalStatistics
