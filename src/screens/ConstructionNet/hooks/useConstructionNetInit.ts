import { useEffect } from "react";
import { useDispatch } from "react-redux";

//Actions
import getCategories from "redux/ConstructionNet/actions/getCategories";
import getPosts from "redux/ConstructionNet/actions/getPosts";

const useConstructionNetInit = () => {
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(getCategories());
		dispatch(getPosts());
	},[]);
}

export default useConstructionNetInit;