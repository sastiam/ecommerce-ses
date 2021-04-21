import React , { memo } from "react";
import "./index.scss";
import AvatarCircle from "../AvatarCircle";
import classNames from "classnames";
import { FaStar } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import useProgressPercentage from "hooks/useProgressPercentage";

const UserCard = (props) => {
	const {
		image,
		points,
		progress,
		textTitle,
		textBody,
		flexDirection,
		onClick,
		footer,
		propsAvatar,
		classNameImage,
	} = props;
	const userCard = classNames("user-card", flexDirection);
	const { currentPercentage } = useProgressPercentage(progress.classesCompleted,progress.courseClassMax);

	return (
		<div className={userCard} onClick={onClick}>
			<div className="user-card-row image">
				<AvatarCircle image={image} isSquared className={classNameImage} {...propsAvatar} />
			</div>
			<div className="user-card-row text">
				<div className="card-row__text title">{textTitle}</div>
				<div className="card-row__text body">
					<div className="text-body">{textBody}</div>
					<div className="flex">
						{points !== 0 && (
							<span className="flex-icon points">
								<FaStar size={12} color="rgb(255, 211, 42)" />
								{points}
							</span>
						)}
						{progress !== 0 && (
							<span className="flex-icon progress">
								<BsClock size={12} />
								{currentPercentage + '%'}
							</span>
						)}
					</div>
				</div>
			</div>
			{footer && (
				<div className="user-card-row user-card-row-footer">{footer}</div>
			)}
		</div>
	);
};

UserCard.defaultProps = {
	flexDirection: "row",
	points: 0,
	progress: 0,
};

export default memo(UserCard);
