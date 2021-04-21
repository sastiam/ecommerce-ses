import React, { memo } from "react";
import "./index.scss";
import GlobalTotalAnimated from "../../../../../../components/common/GlobalTotalAnimated";

const CardboardAdvanceItem = (props) => {
	const { total, icon, textItem } = props;

	return (
		<div className="cardboard-item center">
			<div className="header">
				<div className="flex">
					<GlobalTotalAnimated
						className="total-item"
						total={total}
					/>
					<div className="icon">{icon}</div>
				</div>
			</div>
			<div className="text">{textItem}</div>
		</div>
	);
};

export default memo(CardboardAdvanceItem);
