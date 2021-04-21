import React, { memo } from "react";
import "./index.scss";
import GlobalButton from "../../../common/GlobalButton";
import { Img } from "react-image";
import AvatarCircle from "../AvatarCircle";
import { FaStar, FaUsers } from "react-icons/fa";

const UserCardDataInformation = (props) => {
	const { image, title, username, link, pointsMembers, pointsCourse } = props;

	return (
		<div className="user-data-info">
			<div className="row-info">
				<Img src={image} className="main-image" />
			</div>
			<div className="row-info body	">
				<div className="body__header">
					<p className="title">{title}</p>
					<div className="detail-username">
						<AvatarCircle image={image} sizeImage={20} />
						<span className="text-username">{username}</span>
					</div>
					<div className="detail-points">
						<div className="row">
							<FaUsers color="gray" />
							<span className="text">{pointsMembers}</span>
						</div>
						<div className="row">
							<FaStar color="rgb(255, 211, 42)" />
							<span className="text">{pointsCourse}</span>
						</div>
					</div>
				</div>
				<div className="body__footer">
					<GlobalButton link={link} >Ver más del curso</GlobalButton>
				</div>
			</div>
		</div>
	);
};

export default memo(UserCardDataInformation);
