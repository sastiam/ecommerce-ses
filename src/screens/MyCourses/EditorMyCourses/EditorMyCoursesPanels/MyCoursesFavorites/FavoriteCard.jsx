import React from "react";
import GlobalDiv from "../../../../../components/common/GlobalDiv";
import useStarAmount from "../../../../../hooks/useStarAmount";

const FavoriteCard = (props) => {
	const { image, title, author, punctuation, onClick } = props;
	const starIcons = useStarAmount(punctuation,".9em");
	return (
		<GlobalDiv className="favorite-card" title={title}>
			<div className="row">
				<div className="col">
					<img src={image} alt="" className="favorite-card__image" />
				</div>
				<div className="col">
					<div className="favorite-card__title" onClick={onClick}>
						{title}
					</div>
					<div className="favorite-card__author">{author}</div>
					<div className="favorite-card__punctuation">{starIcons}</div>
				</div>
			</div>
			<div className="row"></div>
		</GlobalDiv>
	);
};

export default FavoriteCard;
