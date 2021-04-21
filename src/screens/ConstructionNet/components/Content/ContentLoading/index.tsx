import React, { memo } from 'react';
import CardTutorialLoading from './VideoSkeletonLoading';

const Loaders = new Array(6).fill(0);

const ContentLoading = () => (
	<>
		{
			Loaders.map((v,i) => (
				<CardTutorialLoading key={i} />
			))
		}
	</>
)

export default memo(ContentLoading);