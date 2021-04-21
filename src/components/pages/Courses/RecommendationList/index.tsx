import React, { memo, FC } from "react";
import "./index.scss";
import ListRecommendationContainerItems from "./ListRecommendationContainerItems";
import { RecommendationText } from "./styles";
import classNames from "classnames";
import { shallowEqual, useSelector } from "react-redux";
import { TReduxState } from "application/metadata/types";
import { IUserInterfaceStore } from "redux/UserInterface/types";

interface IProps {
	horizontal? : boolean;
}

const RecommendationList : FC<IProps> = ({ horizontal }) => {
	const { courses } = useSelector<TReduxState,IUserInterfaceStore>(s => s.userInterface, shallowEqual);
	
	const rHeader = classNames("r-header");
	const rBody = classNames("r-body",{ horizontal });

	return (
		<div className="recommendation">
			<div className={rHeader}>
				<RecommendationText color="var(--color-light)" fontSize="15px">
					Te recomendamos estos cursos
				</RecommendationText>
			</div>
			<div className={rBody}>
				<ListRecommendationContainerItems data={courses.recomendations} />
			</div>
		</div>
	);
};

export default memo(RecommendationList);
