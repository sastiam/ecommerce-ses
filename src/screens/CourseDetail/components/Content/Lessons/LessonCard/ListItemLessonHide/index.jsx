import React, { memo } from "react";

//Components
import ItemLessonHide from "../ItemLessonHide";

const ListItemLessonHide = ({ itemsHide }) => (
	<ul>
		{ itemsHide.map((v,i) => <ItemLessonHide lessonNumber={i + 1} key={i} {...v} />) }
	</ul>
)

export default memo(ListItemLessonHide);