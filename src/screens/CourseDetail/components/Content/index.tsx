import React from "react";
import "./index.scss";

import Header from "../Header";
import Main from "./Main";
import Lessons from "./Lessons";
import Comments from "./Comments";
import Loading from "components/common/Loading";

import { useCourseDetailContext } from "screens/CourseDetail/store/Global/context";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";
import ExamModalProvider from "screens/CourseDetail/store/ExamModal/provider";

const Content = () => {
	//Hooks
	const { TabIndexSelected } = useCourseDetailContext();
	const { isLoading } = useCourseDetailRedux();
	
	const GetScreenView = (index : number) => {
		switch(index){
			case 0:
				return <Main />
			case 1:
				return <Lessons />
			case 2:
				return <Comments />
			default:
				return <Main />
		}
	}

	if(isLoading) return <Loading height="100vh" center />;

	return <>
		<Header />
		<div className='container-tab'>
			{GetScreenView(TabIndexSelected)}
		</div>
	</>

}

export default Content;