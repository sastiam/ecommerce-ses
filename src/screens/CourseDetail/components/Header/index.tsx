import React, { memo } from "react";

//Components
import ListSection from "./Others/OptionList";
import Default from "./Default";
import Obtains from "./Obtains";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";

const Header = () => {
	const { user } = useCourseDetailRedux();
	const { isObtainsCourse , isMentor } = user;

	return <div>
		{ 
			!isObtainsCourse || isMentor ? 
				<Default /> :
				<Obtains />
		}
		<ListSection />
	</div>
}

export default memo(Header);