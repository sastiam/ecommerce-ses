import { AuthContext } from "context/Auth";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import getCategories from "redux/UserInterface/actions/getCategories";
import getMainBannerData from "redux/UserInterface/actions/getMainBannerData";
import getStadistics from "redux/UserInterface/actions/getStadistics";

const useAppInit = () => {
	const dispatch = useDispatch();
	const { userAuth, loadingAuth } = useContext(AuthContext);

	useEffect(() => {
		dispatch(getMainBannerData());
		dispatch(getStadistics());
		dispatch(getCategories());
	},[])

	return {
		userAuth,
		loadingAuth
	}
}

export default useAppInit;