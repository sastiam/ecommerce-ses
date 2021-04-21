import { useState } from "react";
import { TReduxState } from "application/metadata/types";

import { useDispatch, useSelector } from "react-redux";
import { IConstructionNetStore } from "redux/ConstructionNet/types";

//Actions
import changeFilterData from "redux/ConstructionNet/actions/changeFilterData";
import clearFilterData from "redux/ConstructionNet/actions/clearFilterData";

const useTopContent = () => {
	const [ currentSelected , setSelected ] = useState<string>("Todos");

	//Redux
	const dispatch = useDispatch();
	const {
		isLoading,
		allPosts,
		categories
	} = useSelector<TReduxState, IConstructionNetStore>(({ constructionNet }) => constructionNet);

	const CardClickAction = (category : string) => () => {
		if(category === 'Todos') {
			dispatch(clearFilterData());
			setSelected(() => 'Todos');
			return;
		}

		let data = allPosts.filter(v => v.category === category);
		dispatch(changeFilterData(data, category));
		setSelected(() => category);
	}

	return {
		currentSelected,
		isLoading,
		categories : [{ name: "Todos" }, ...categories!],
		CardClickAction
	}
}

export default useTopContent;