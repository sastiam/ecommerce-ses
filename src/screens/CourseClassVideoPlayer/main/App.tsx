import React from 'react'
import ScreenClassroomNotAvailable from "../screens/ScreenClassroomNotAvailable";
import ScreenClassroom from "../screens/ScreenClassroom";
import VideoCourseLoading from '../shared/components/VideoCourseLoading';
import useFetchVerifyAccessClassroom from '../hooks/useFetchVerifyAccessClassroom';

const App = () => {
	const { canAccess, loadingObtainCourse } =	useFetchVerifyAccessClassroom();
	if (loadingObtainCourse) return <VideoCourseLoading />;
	if (canAccess) return  <ScreenClassroom/>
	if (!canAccess) return <ScreenClassroomNotAvailable />;
	return null;
}

export default App
