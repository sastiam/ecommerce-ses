import { TReduxState } from "application/metadata/types";
import { ICourseModule } from "application/metadata/interfaces/Course/Module";
import { useSelector } from "react-redux";

const query = (store: TReduxState) : ICourseModule => {
	const {
		courseDetail: {
			course: { modules },
		},
	} = store;
	const firstClass = modules[0]?.classes[0];
	return firstClass || {};
};

export default () => useSelector<TReduxState,ICourseModule>((store) => query(store));
