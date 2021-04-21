import React, { useContext } from "react";
import classNames from "classnames";
import { Link } from "@reach/router";
import ShowUserOnly from "../../../../components/pages/User/ShowUserOnly";
import { UserDetailContext } from "../../../../context/UserDetail";

const ProfileUsernameInformation = (props) => {
	const { imageBackdrop } = props;
	const { userData } = useContext(UserDetailContext);
	const detailTitle = classNames("detail-title", {
		withImage: imageBackdrop !== "",
	});
	return (
		<div className="detail">
			<h1 className={detailTitle}>{userData.fullName}</h1>
			<p className="detail-description flex-space">
				<span className="text-description">{userData.username}</span>
				<ShowUserOnly>
					<Link
						to="/search"
						className="detail-link-explore"
						title="explorar más curso"
					>
						Explorar más cursos
					</Link>
				</ShowUserOnly>
			</p>
		</div>
	);
};

export default ProfileUsernameInformation;
