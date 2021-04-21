import React, { memo, FC } from "react";
import { CourseHeaderContainer , CourseHeaderAuthor , CourseHeaderTitle } from "./styles";

interface IProps {
	title : string,
	author : string,
	simple : boolean,
	onClick() : void
}

const HeaderContainer : FC<IProps> = ({ title, author, onClick , simple }) => {

	//Variables
	const newTitle = title.length > 36 ? title.substr(0,36) + " ..." : title;

	return <CourseHeaderContainer simple={simple}>
		<CourseHeaderTitle onClick={onClick}>{newTitle}</CourseHeaderTitle>
		<CourseHeaderAuthor>Por {author}</CourseHeaderAuthor>
	</CourseHeaderContainer>
}

export default memo(HeaderContainer);