import { useEffect } from "react";
import { TLoadingState, TReduxState } from "application/metadata/types";
import { useDispatch, useSelector } from "react-redux";
import getSearchBanner from "redux/UserInterface/actions/getSearchBanner";
import { Types } from "application/metadata/interfaces/Search/types";

const useGetBannerDataSwipeable = () => {
	const data = useSelector<TReduxState,Types.IBannersSearch[]>(state => state.userInterface.searchBanner);
	const loading = useSelector<TReduxState,TLoadingState>(state => state.userInterface.loadingSearchBannerState);
	const dispatch = useDispatch();
	useEffect(() => {
		if(!!data.length) return;
		dispatch(getSearchBanner());
	},[]);
	return {
		data,
		loading
	}
}

export default useGetBannerDataSwipeable
