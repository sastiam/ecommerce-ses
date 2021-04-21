import React, { memo } from "react";
import "./index.scss";

const ItemListInformation = props => {
	const { icon , title , data } = props;

	return <li className="item-list-information">
		<span className="course-extra-information">
			<span className="icon">
				{icon}
			</span>
			<span className="text">
				{title}
			</span>
		</span>
		<span className="data">{data}</span>
	</li>
}

export default memo(ItemListInformation);