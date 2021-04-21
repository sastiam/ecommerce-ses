import React from "react";
import PreviewImage from "./PreviewImage";
import styled from "styled-components";

const ScrollingPreviewImages = styled.div`
	overflow-x: scroll;
	width: 100%;
	display: flex;
	scroll-snap-type:x mandatory;
	&::-webkit-scrollbar {
		display : none;
	}
	.scroll__card {
		flex: none;
		margin-right: 2em;
		scroll-snap-align:start;
	}
`;

const PreviewSubjectScrollable = ({ data }) => {
	return (
		<ScrollingPreviewImages>
			{data.map((current, index) => (
				<div key={index} className="scroll__card">
					<PreviewImage
						text={current.text}
						link={current.link}
						textLink={current.textLink}
						onlyCard
					/>
				</div>
			))}
		</ScrollingPreviewImages>
	);
};

export default PreviewSubjectScrollable;
