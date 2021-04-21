import React, { memo } from "react";

import VideoCard from "../VideoCard";
import GlobalDiv from "../../../../components/common/GlobalDiv";

import SearchResultEmpty from "./SearchResultEmpty";
import ContentLoading from "./ContentLoading";

import { useSelector , shallowEqual } from 'react-redux';
import { TReduxState } from 'application/metadata/types';
import { IConstructionNetStore } from "redux/ConstructionNet/types";


const VideoList = () => {
	const {
		postsFiltered,
		isLoading
	} = useSelector<TReduxState,IConstructionNetStore>(({ constructionNet }) => constructionNet , shallowEqual);

	if(isLoading) {
		return <div className='grid-tutorials loading'>
			<ContentLoading />
		</div>
	}

	return (
		<GlobalDiv paddingTop="4em">
			{
				postsFiltered.length ? 
					<div className="grid-tutorials">
						{
							postsFiltered?.map((v, i) => (
								<VideoCard 
									key={i}
									id={v.idTutorial}
									title={v.title}
									imagePreview={v.imagePreview}
									createDate={v.createDate}
								/>
							))
						}
					</div> : 
					<SearchResultEmpty />
			}
		</GlobalDiv>
	);
};

export default memo(VideoList);
