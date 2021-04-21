import { shallowEqual, useSelector } from 'react-redux';
import { TReduxState } from 'application/metadata/types';
import { IUserInterfaceStore } from 'redux/UserInterface/types';

const useLastCourse = () => {
	const { courses } = useSelector<TReduxState, IUserInterfaceStore>(s => s.userInterface, shallowEqual);

	return {
		course : courses.last,
		isLoading : courses.loadingState === "loading"
	}
}

export default useLastCourse
