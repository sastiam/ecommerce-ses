import React from "react";
import FavoriteCard from "./FavoriteCard";
import { navigate } from "@reach/router";
import GlobalDiv from "../../../../../components/common/GlobalDiv";

const FavoriteCardsContainer = ({ data }) => {
	return (
		<GlobalDiv paddingVertical="3em">
			<div className="grid">
				{data.map((e, i) => (
					<FavoriteCard
						key={i}
						image={e.imagePreview}
						title={e.title}
						author={e.mentor}
						punctuation={e.punctuation}
						onClick={() => navigate(`/course/${e.idCourse}`)}
					/>
				))}
			</div>
		</GlobalDiv>
	);
};

export default FavoriteCardsContainer;
